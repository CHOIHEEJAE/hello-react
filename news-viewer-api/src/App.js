import { Route, Routes } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

const App = () => {
  return (
    <Routes>
      <Route path="/:category?" element={<NewsPage />} />;
    </Routes>
  );
};

export default App;

// const [category, setCategory] = useState('all');
// const onSelect = useCallback((category) => setCategory(category), []);
// return (
//   <div>
//     <Categories category={category} onSelect={onSelect} />
//     <NewsList category={category} />;
//   </div>
// );

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const [data, setData] = useState(null);

//   const onClick = async () => {
//     try {
//       const response = await axios.get(
//         'https://newsapi.org/v2/top-headlines?country=kr&apiKey=aa4458914bb946f9a707913ce00697b2',
//       );
//       setData(response.data);
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   return (
//     <div>
//       <div>
//         <button onClick={onClick}>데이터 불러오기</button>
//       </div>
//       {data && (
//         <textarea
//           rows={7}
//           value={JSON.stringify(data, null, 2)}
//           readOnly={true}
//         />
//       )}
//     </div>
//   );
