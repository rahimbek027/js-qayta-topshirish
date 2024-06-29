
  
  {
    // for1
    function number(k, n) {
        if (n > 0) {
          for (let i = 0; i < n; i++) {
            console.log(k);
          }
        } else {
          return `${n} musbat bo'lishi kerak.`;
        }
      }
      
      console.log(number(3, 5)); 
      
  }

  

/*
  {
    // for2
    function number(a, b) {
      if (a < b) {
        for (let i = a; i < b + 1; i++) {
          console.log(i);
        }
      } else {
        return a`musbat son kiriting.`;
      }
    }
  
     console.log(number(2, 5));
  }

  */

/*
  {
    // for3
    function number(a, b) {
      if (a < b) {
        for (let d = (b -= 1); d > a; d--) {
          console.log(d);
        }
      } else {
        return `a soni b dan kichik bo'lishi kerak`;
      }
      console.log(b - a);
    }
  
    console.log(number(2, 5));
  }
  */

/*
  {
    // for4
    function shakar(prise) {
      for (let i = 1; i <= 10; i += 1) {
        console.log(`${i * prise}`);
      }
    }
    console.log(shakar(25000));
  }
*/


/*
  {
    // for5
    function shakar(prise) {
      for (let i = 0.1; i <= 1; i += 0.1) {
        console.log(`${i * prise}`);
      }
    }
     console.log(shakar(25000));
  }
*/


/*
  {
    // for6
    function shakar(prise) {
      for (let i = 1.2; i <= 2; i += 0.2) {
        console.log(`${i * prise}`);
      }
    }
     console.log(shakar(25000));
  }
*/

/*
  {
    // for7
    function son(a, b) {
      let sum = 0;
      for (let i = a; i <= b; i++) {
        sum = sum + i;
      }
      console.log(`${sum}`);
    }
     console.log(son(5, 10));
  }
*/


/*
  {
    // for8
    function son(a, b) {
      let sum = 1;
      for (let i = a; i <= b; i++) {
        sum = sum * i;
      }
      console.log(`${sum}`);
    }
     console.log(son(5, 10));
  }
*/


/*
  {
    // for9
    function son(a, b) {
      let sum = 0;
      for (let i = a; i <= b; i++) {
        sum = sum + i * i;
      }
      console.log(`${sum}`);
    }
    console.log(son(5, 10));
  }
*/


/*
  {
    // for10
    function number(n) {
      let sum = 0;
      if (n > 0) {
        for (let i = 1; i <= n; i++) {
          sum = sum + 1 / i;
          console.log(sum);
        }
      } else {
        return `n soni 0 dan katta bolsin`;
      }
    }
    console.log(number(10));
  }
  */





/*
  {
    // 1 masala
    function day(n) {
      switch (n) {
        case 1:
          return "Dushanba";
        case 2:
          return "seshanba";
        case 3:
          return "chorshanba";
        case 4:
          return "payshanba";
        case 5:
          return "juma";
        case 6:
          return "shanba";
        case 7:
          return "yakshanba";
        default:
          return "bunday kun yo'q";
      }
    }
    console.log(day(5));
  }
  */

/*
  {
    // 2 masala
    function ball(n) {
      switch (n) {
        case 1:
          return "yomon";
        case 2:
          return "qoniqarsiz";
        case 3:
          return "qoniqarli";
        case 4:
          return "yaxshi";
        case 5:
          return "alo";
  
        default:
          return "xato";
      }
    }
    console.log(ball(5));
  }
  */

/*
  {
    // 3 masala
    function month(n) {
      switch (n) {
        case 1:
        case 2:
        case 12:
          return "qish";
        case 3:
        case 4:
        case 5:
          return "bahor";
        case 6:
        case 7:
        case 8:
          return "yoz";
        case 9:
        case 10:
        case 11:
          return "summer";
  
        default:
          return "xato";
      }
    }
    console.log(month(5));
  }
  */

/*
  {
    //  4 masala
    function month(n) {
      switch (n) {
        case 4:
        case 6:
        case 9:
        case 11:
          return "30 kun bor";
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
          return "31 kun bor";
        case 2:
          return "28 kun bor 4 yilda 1marta 29kun";
  
        default:
          return "xato";
      }
    }
    console.log(month(5));
  }
  */

/*
  {
    // 5 masala
    function son(a, b, amal) {
      switch (amal) {
        case 1:
          return a + b;
  
        case 2:
          return a - b;
        case 3:
          return a * b;
        case 4:
          return a / b;
  
        default:
          return "4 gacha raqam kiritilsin";
      }
    }
    console.log(son(5, 5, 4));
  }
*/


/*
  {
    // 6 masala
    function metr(a, b) {
      switch (b) {
        case 1:
          return `${a * 0.1} dm`;
  
        case 2:
          return `${a * 1000} km`;
        case 3:
          return `${(a = a)} m`;
        case 4:
          return `${a * 0.001} mm`;
        case 5:
          return `${a * 0.01} sm`;
  
        default:
          return "5 gacha raqam kiritilsin";
      }
    }
    console.log(metr(70, 3));
  }
*/


/*
  {
    // 7 masala
    function kilo(a, b) {
      switch (b) {
        case 1:
          return `${a} kg = ${a} kg`;
  
        case 2:
          return `${a} mg = ${a * 0.000_001} kg`;
        case 3:
          return ` ${a} g = ${a * 0.001} kg`;
        case 4:
          return ` ${a} t = ${a * 1000} kg`;
        case 5:
          return `${a} st = ${a * 100} kg`;
  
        default:
          return "5 gacha raqam kiritilsin";
      }
    }
    console.log(kilo(5, 5));
  }
*/


/*
  {
    // 8 masala
    function day(n) {
      switch (n) {
        case 1:
          return "yanvar";
        case 2:
          return "fevral";
        case 3:
          return "mart";
        case 4:
          return "aprel";
        case 5:
          return "may";
        case 6:
          return "iyun";
        case 7:
          return "iyul";
        case 8:
          return "avgust";
        case 9:
          return "september";
        case 10:
          return "october";
        case 11:
          return "november";
        case 12:
          return "december";
        default:
          return "bunday oy yo'q";
      }
    }
    console.log(day(5, 5));
  }
*/


/*
  {
    // 9 masala
    function day(a, n) {
      switch (n) {
        case 1:
          return `yanvar oyining ${a} kuni`;
        case 2:
          return `fevral oyining ${a} kuni`;
        case 3:
          return `mart oyining ${a} kuni`;
        case 4:
          return `aprel oyining ${a} kuni`;
        case 5:
          return `may oyining ${a} kuni`;
        case 6:
          return `iyun oyining ${a} kuni`;
        case 7:
          return `iyul oyining ${a} kuni`;
        case 8:
          return `avgust oyining ${a} kuni`;
        case 9:
          return `sentabr oyining ${a} kuni`;
        case 10:
          return `oktabr oyining ${a} kuni`;
        case 11:
          return `noyabr oyining ${a} kuni`;
        case 12:
          return `dekabr oyining ${a} kuni`;
        default:
          return "bunday oy yo'q";
      }
    }
    console.log(day(5, 5));
  }
  */
  
  /*
   {
     // 10 masala
     function robot(y, k) {
       let k=0
       switch ( y) {
         case (`s`):
          if()
  
         default:
           return "bunday yonalish yoq";
       }
     }
     console.log(robot( "g", 0));
  }
  
  */
  