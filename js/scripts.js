function stringToAscii(gabe){
  var ascii="";
  if(gabe.length>0)
    for(i=0; i<gabe.length; i++){
      var c = ""+gabe.charCodeAt(i);
      while(c.length < 3)
      c = "0"+c;
      ascii += c;
  }
  return ascii
  console.log(ascii);
}



$(document).ready(function() {
  $("form#question").submit(function(event) {


  var form_value = $("input#ct").val();
  var ascii_result = stringToAscii(form_value);
  console.log(ascii_result);
  // var stringman = gabe.length;

  event.preventDefault();
  });
});


// var exile = gabe.slice(-1);
 // console.log(exile);
// var exile =[];
// exile.push(gabe);
// console.log(exile);
// var raina = exile.split("");
// console.log(raina);
// var exile =[];
// var s = gabe;
// for (var i = 0; i < s.length; i++) {
//      console.log(s.charAt(i));
// }

      // function convertMe()
      // {
        // var converted = stringToAscii(('#ct').value);
        // ('sth').innerHTML = converted;
      // }
      //
      // function stringToAscii(s)
      // {
      //   var ascii="";
      //   if(s.length>0)
      //     for(i=0; i<s.length; i++)
      //     {
      //       var c = ""+s.charCodeAt(i);
      //       while(c.length < 3)
      //         c = "0"+c;
      //       ascii += c;
      //     }
      //   return(ascii);
      // }

// var a = gabe.split("");
// // var vowels = ["a","e","i","o","u"]
// // Array.prototype.compare = function(testArr) {
// //     if (this.length != testArr.length) return false;
// //     for (var i = 0; i < testArr.length; i++) {
// //         if (this[i].compare) {
// //             if (!this[i].compare(testArr[i])) return false;
// //         }
// //         if (this[i] !== testArr[i]) return false;
// //     }
// //     return true;
// // }
//
// var b = ["a","e","i","o","u"];
// // function intersection_destructive(exile, vowel)
// // {
// //   var result = new Array();
// //   while( gabe.length > 0 && vowel.length > 0 )
// //   {
// //      if      (gabe[0] < vowel[0] ){ gabe.shift(); }
// //      else if (gabe[0] > vowel[0] ){ vowel.shift(); }
// //      else /* they're equal */
// //      {
// //        result.push(gabe.shift());
// //        vowel.shift();
// //      }
// //   }
// //
// //   console.log(result);
// // }
// //
// function intersect(a, b) {
//     var d = {};
//     var results = [];
//     for (var i = 0; i < b.length; i++) {
//         d[b[i]] = true;
//     }
//     for (var j = 0; j < a.length; j++) {
//         if (d[a[j]])
//             results.push(a[j]);
//     }
//     return results;
//     console.log(results);
// }
//
//
//


// for (var i = 0; i < exile.length; i++) {
//      console.log(exile.charAt(i));
// }


// console.log(greg);
// var appendText = [];
// for (var i = 0; i < gabe.length; i++) {
//   console.log(appendText); //This adds each thing we want to append to the array in order.
// }
// console.log(appendText);
//
// var new_array = appendText.concat(); //Copy initial array
//
// for (var i = 1; i < appendText.length; i++) {
//   new_array[i] = new_array[i-1] + appendText[i];
// }
//
// console.log(new_array);
//
// //Out here we call the append once
// //Since we defined our variable as an array up there we join it here into a string
// appendText = appendText.join(" ");
// $("#sth").append(new_array + "<br>" );
//
// event.preventDefault();
// });
// });
