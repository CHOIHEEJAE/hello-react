import React, { useRef, useCallback, useState } from "react";
import { produce } from "immer";

const App = () => {
  const nextId = useRef(1);
  const [form, setForm] = useState({ name: "", username: "" });
  const [data, setData] = useState({ array: [], uselessValue: null });

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm(
      produce((draft) => {
        draft[name] = value;
      })
      //   {
      // ...form,
      // [name]: [value],
      // }
    );
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const info = {
        id: nextId.current,
        name: form.name,
        username: form.username,
      };

      setData(
        produce((draft) => {
          draft.array.push(info);
        })
        //   {
        //   ...data,
        //   array: data.array.concat(info),
        // }
      );

      setForm({
        name: "",
        username: "",
      });
      nextId.current += 1;
    },
    [form.name, form.username]
  );

  const onRemove = useCallback(
    (id) => {
      setData({
        ...data,
        array: data.array.filter((info) => info.id !== id),
      });
    },
    [data]
  );

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="username"
          placeholder="아이디를 입력하세요"
          value={form.username}
          onChange={onChange}
        />
        <input
          name="name"
          placeholder="이름을 입력하세요"
          value={form.name}
          onChange={onChange}
        />
        <button type="submit">등록</button>
      </form>
      <div>
        <ul>
          {data.array.map((info) => (
            <li key={info.id}>
              아이디 : {info.username} / 이름 : {info.name}
              <button onClick={() => onRemove(info.id)}>삭제</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
