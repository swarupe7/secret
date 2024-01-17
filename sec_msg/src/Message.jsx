import React from 'react';

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const Message = ({key,text}) => {

  const randomColor = getRandomColor();

  const messageStyle = {
    backgroundColor: randomColor,
    color: 'white',
    borderRadius: '10px', 
    padding: '10px', 
    margin: '10px', 
  };


  return (
    <div id={key} style={messageStyle}>{text}</div>
  )
}

export default Message;