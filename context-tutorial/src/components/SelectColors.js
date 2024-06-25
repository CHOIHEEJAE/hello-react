import React from 'react';
import { ColorConsumer } from '../contexts/color';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const SelectColors = () => {
  return (
    <div>
      <h2> 색상을 선택하새요</h2>
      <ColorConsumer>
        {({ actions }) => (
          <div style={{ display: 'flex' }}>
            {colors.map((color) => (
              <div
                key={color}
                style={{
                  background: color,
                  width: '24px',
                  height: '24px',
                  cursor: 'pointer',
                }}
                onClick={() => actions.setColor(color)}
                onContextMenu={(e) => {
                  // 우클릭 시 브라우저 옵션메뉴 뜨지 않도록 방지
                  e.preventDefault();
                  actions.setSubcolor(color);
                }}
              />
            ))}
          </div>
        )}
      </ColorConsumer>
      <br></br>
    </div>
  );
};

export default SelectColors;
