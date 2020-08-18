export const SumPeriod = (props) => {
  var a = 0;
  props.data.schedules.forEach((item) => {
    a = +item.period + a;
  });
  return a * 60;
};
