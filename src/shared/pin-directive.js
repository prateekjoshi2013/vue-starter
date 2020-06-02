/* eslint-disable no-param-reassign */
export default function (element, binding) {
  Object.keys(binding.value).forEach((key) => {
    element.style[key] = binding.value[key];
  });
  element.style.position = 'absolute';
}

// lifecycle hook
// export default {
//     bind: (element, binding) => {
//       Object.keys(binding.value).forEach((key) => {
//         element.style[key] = binding.value[key];
//       });
//       element.style.position = 'absolute';
// },
// bind: (element, binding) => {
//     Object.keys(binding.value).forEach((key) => {
//       element.style[key] = binding.value[key];
//     });
//     element.style.position = 'absolute';
// },
// }
