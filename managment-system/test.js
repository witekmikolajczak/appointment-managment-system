const resposne = () => {
  const req = fetch(
    "https://managment-system-30528-default-rtdb.firebaseio.com/event/date"
  ).then((res) => {
    console.log(res);
  });
};
