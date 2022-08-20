console.log('Hello!');
import { Datepicker } from 'vanillajs-datepicker/Datepicker';

$(function() {
  const elem = $('input[name="date"]');
  const datepicker = new Datepicker(elem, {
    // ...options
  });
  console.log(elem)
})
