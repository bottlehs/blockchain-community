import React from 'react';
import CustomInput from '../../components/inputs/CustomInput';
import CustomSelect from '../../components/inputs/CustomSelect';
import CustomRadio from '../../components/inputs/CustomRadio';
import CustomCheck from '../../components/inputs/CustomCheck';

export default {
  title: 'ui|input',
};

export const inputComponent = () => {
  const selectArr = [
    { text: '부선택1', value: 'select1' },
    { text: '선택2', value: 'select2' },
    { text: '선택3', value: 'select3' },
    { text: '선택4', value: 'select4' },
  ];
  const radioArr = [
    { text: '부선택1', value: 'select1' },
    { text: '선택2', value: 'select2' },
    { text: '선택3', value: 'select3' },
    { value: 'select4' },
  ];
  const radioCardArr = [
    { text: '텍스트', emoji: '😃', value: 'select1' },
    { text: '텍스트', emoji: '🤔', value: 'select2' },
    { text: '텍스트<br />텍스트', emoji: '👏', value: 'select3' },
  ];
  let selectValue = 'select1';
  let radioValue = 'select1';
  let radioEmojiValue = 'select1';
  let checkValue = [];
  const handleSelect1 = (obj) => {
    console.log(obj);
  };
  const handleSelect2 = (obj) => {
    selectValue = obj.value;
  };
  const handleRadio = (obj) => {
    console.log(obj);
    radioValue = obj.value;
  };
  const handleRadioEmoji = (obj) => {
    console.log(obj);
    radioEmojiValue = obj.value;
  };
  const handleCheck = (values) => {
    checkValue = values;
    console.log(checkValue);
  };

  return (
    <div className="input-guide">
      <ul>
        <li className="inner">
          <CustomSelect
            list={selectArr}
            onCreate={handleSelect1}
            placeholder="옵션을 선택해주세요."
          />
        </li>
        <li className="inner">
          <CustomSelect
            value={selectValue}
            list={selectArr}
            placeholder="옵션을 선택해주세요."
            fixed
            onCreate={handleSelect2}
          />
        </li>
        <li className="inner">
          <CustomInput>
            <input type="text" placeholder="입력전" maxLength={10} />
          </CustomInput>
        </li>
        <li className="inner">
          <CustomInput>
            <textarea rows={3} placeholder="텍스트 입력" />
          </CustomInput>
        </li>
        <li>
          <CustomRadio
            value={radioValue}
            list={radioArr}
            onCreate={handleRadio}
          />
        </li>
        <li>
          <CustomRadio
            type="card"
            value={radioEmojiValue}
            list={radioCardArr}
            onCreate={handleRadioEmoji}
          />
        </li>
        <li>
          <CustomCheck
            checkedValues={checkValue}
            value="check1"
            text="선택1"
            onCreate={handleCheck}
          />
        </li>
        <li>
          <CustomCheck
            checkedValues={checkValue}
            value="check2"
            onCreate={handleCheck}
          />
        </li>
      </ul>
    </div>
  );
};
inputComponent.story = { name: 'input' };
