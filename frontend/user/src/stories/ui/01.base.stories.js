import React from 'react';

const colorArr = [
  [
    { color: '#6C008B', txt: 'Main Color / Button' },
    { color: '#AD35CF', txt: 'Point Color' },
    { color: '#ff0900', txt: 'Point Color2' },
    { color: '#ff8000' },
    { color: '#1a8dff' },
    { color: '#3a69c3' },
    { color: '#ffb700' },
    { color: '#ffcc00' },
  ],
  [
    { color: '#000000' },
    { color: '#666666' },
    { color: '#808080' },
    { color: '#888888' },
    { color: '#cccccc' },
    { color: '#d1d1d1' },
    { color: '#e5e5e5' },
    { color: '#eeeeee' },
    { color: '#f6f6f6' },
    { color: '#ffffff' },
  ],
];

export default {
  title: 'ui|base',
};

export const colorComponent = () => {
  return (
    <div className="color-guide">
      {colorArr.map((colors) => (
        <ul>
          {colors.map((item) => (
            <li key={item.color}>
              <em
                style={{
                  background: item.color,
                  borderWidth: `${item.color === '#ffffff' ? '1px' : 0}`,
                }}
              />
              <p>
                {item.color}
                <br />
                {item.txt}
              </p>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
};

export const typographyComponent = () => {
  return (
    <div className="typo-guide">
      <div>
        <p className="fs28b">Noto Sans CJK KR 28 Bold</p>
        <p className="fs28b c-m1">Noto Sans CJK KR 28 Bold</p>
        <p className="fs25b">Noto Sans CJK KR 25 Bold</p>
        <p className="fs23m">Noto Sans CJK KR 23 Medium</p>
        <p className="fs22b">Noto Sans CJK KR 22 Bold</p>
        <p className="fs22b c-m1">Noto Sans CJK KR 22 Bold</p>
        <p className="fs22m">Noto Sans CJK KR 22 Medium</p>
        <p className="fs21b c-m1">Noto Sans CJK KR 21 Bold</p>
        <p className="fs20b c-p2">Noto Sans CJK KR 20 Bold</p>
        <p className="fs20m">Noto Sans CJK KR 20 Medium</p>
        <p className="fs19b">Noto Sans CJK KR 19 Bold</p>
        <p className="fs19m">Noto Sans CJK KR 19 Medium</p>
        <p className="fs18b">Noto Sans CJK KR 18 Bold</p>
        <p className="fs17b">Noto Sans CJK KR 17 Bold</p>
        <p className="fs17m">Noto Sans CJK KR 17 Medium</p>
        <p className="fs17r">Noto Sans CJK KR 17 Regular</p>
        <p className="fs17r c-d3">Noto Sans CJK KR 17 Regular</p>
      </div>
      <div>
        <p className="fs15b">Noto Sans CJK KR 15 Bold</p>
        <p className="fs15b c-p1">Noto Sans CJK KR 15 Bold</p>
        <p className="fs15m c-m1">Noto Sans CJK KR 15 Medium</p>
        <p className="fs15m c-p1">Noto Sans CJK KR 15 Medium</p>
        <p className="fs15m c-p2">Noto Sans CJK KR 15 Medium</p>
        <p className="fs15m c-black">Noto Sans CJK KR 15 Medium</p>
        <p className="fs15m c-t1">Noto Sans CJK KR 15 Medium</p>
        <p className="fs15r">Noto Sans CJK KR 15 Regular</p>
        <p className="fs15r c-g1">Noto Sans CJK KR 15 Regular</p>
        <p className="fs15r c-g3">Noto Sans CJK KR 15 Regular</p>
        <p className="fs15r c-t2">Noto Sans CJK KR 15 Regular</p>
        <p className="fs15r c-t3">Noto Sans CJK KR 15 Regular</p>
        <p className="fs15r c-t1">Noto Sans CJK KR 15 Regular</p>
        <p className="fs14b">Noto Sans CJK KR 14 Bold</p>
        <p className="fs14m">Noto Sans CJK KR 14 Medium</p>
        <p className="fs14m c-m1">Noto Sans CJK KR 14 Medium</p>
        <p className="fs14m c-t4">Noto Sans CJK KR 14 Medium</p>
        <p className="fs14m c-g2">Noto Sans CJK KR 14 Medium</p>
        <p className="fs14r">Noto Sans CJK KR 14 Regular</p>
        <p className="fs14r c-g1">Noto Sans CJK KR 14 Regular</p>
        <p className="fs14r c-t1">Noto Sans CJK KR 14 Regular</p>
      </div>
      <div>
        <p className="fs13b">Noto Sans CJK KR 13 Bold</p>
        <p className="fs13m c-m1">Noto Sans CJK KR 13 Medium</p>
        <p className="fs13m c-p2">Noto Sans CJK KR 13 Medium</p>
        <p className="fs13m c-3">Noto Sans CJK KR 13 Medium</p>
        <p className="fs13m">Noto Sans CJK KR 13 Medium</p>
        <p className="fs13m c-g3">Noto Sans CJK KR 13 Medium</p>
        <p className="fs13r c-m1">Noto Sans CJK KR 13 Regular</p>
        <p className="fs13r c-p2">Noto Sans CJK KR 13 Regular</p>
        <p className="fs13r c-g3">Noto Sans CJK KR 13 Regular</p>
        <p className="fs13r c-t5">Noto Sans CJK KR 13 Regular</p>
        <p className="fs13r c-g2">Noto Sans CJK KR 13 Regular</p>
        <p className="fs12m">Noto Sans CJK KR 12 Medium</p>
        <p className="fs12m c-t2">Noto Sans CJK KR 12 Medium</p>
        <p className="fs12m c-g3">Noto Sans CJK KR 12 Medium</p>
        <p className="fs12r">Noto Sans CJK KR 12 Regular</p>
        <p className="fs12r c-g1">Noto Sans CJK KR 12 Regular</p>
        <p className="fs12r c-g3">Noto Sans CJK KR 12 Regular</p>
        <p className="fs12r c-g5">Noto Sans CJK KR 12 Regular</p>
        <p className="fs11m c-g3">Noto Sans CJK KR 11 Medium</p>
        <p className="fs11r c-g3">Noto Sans CJK KR 11 Regular</p>
        <p className="fs10m c-g3">Noto Sans CJK KR 10 Medium</p>
        <p className="fs10r c-g3">Noto Sans CJK KR 10 Regular</p>
      </div>
    </div>
  );
};

colorComponent.story = {
  name: 'color',
};

typographyComponent.story = {
  name: 'typography',
};
