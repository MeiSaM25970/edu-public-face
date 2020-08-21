export const SumPeriod = (props) => {
  var a = 0;
  if (props.data.schedules) {
    props.data.schedules.forEach((item) => {
      a = +item.period + a;
    });
    return a * 60;
  } else return 0;
};
