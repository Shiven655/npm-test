import moment from "moment";
import _ from "ladash";



console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
console.log(moment().format('dddd'));
console.log(moment().format("MMM Do YY") );
console.log(moment().isValid("2020-01-01") );
console.log(moment().isValid("2020-14-01") );

console.log(moment().add(7, 'd'));