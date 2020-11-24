export function checkBoxonClick(component, key, index) {
  const isOns = Object.assign([], component.state[key]);
  const i = isOns.indexOf(index);
  if (i !== -1) {
    isOns.splice(i, 1);
  } else {
    isOns.push(index);
  }
  const state = {};
  state[key] = isOns;
  component.setState(state);
}