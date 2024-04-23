function clr(a)
      {
        switch(a)
        {
          case 1:
          document.getElementById('iph').src = "img9r.png";
            break;
          case  2:
            document.getElementById('iph').src = "11w.png";
            document.getElementById('iph').width = "586";
            document.getElementById('iph').height = "630";
            break;
        }
      }
      function dropdown()
      {
        switch(document.getElementById('cnty').value)
        {
          case "2":
          document.getElementById('city7').selected = true;
          document.getElementById('city2').hidden = false;
          document.getElementById('city3').hidden = false;
          document.getElementById('city6').hidden = true;
          document.getElementById('city4').hidden = true;
          document.getElementById('city5').hidden = true;
          break;
          case "3":
          document.getElementById('city7').selected = true;
          document.getElementById('city4').hidden = false;
          document.getElementById('city5').hidden = false;
          document.getElementById('city6').hidden = true;
          document.getElementById('city2').hidden = true;
          document.getElementById('city3').hidden = true;
          break;
        }
      }
      function pay()
      {
        switch(document.getElementById('paym').value)
        {
          case "2":
            document.getElementById('ccard1').hidden = true;
            document.getElementById('ccard2').hidden = true;
            document.getElementById('ccard3').hidden = true;
            document.getElementById('ccard4').hidden = true;
            document.getElementById('ccard5').hidden = true;
            document.getElementById('card1').required = false;
            document.getElementById('card2').required = false;
            document.getElementById('card3').required = false;
            document.getElementById('card4').required = false;
            document.getElementById('card5').required = false;
            break;
          case "3":
            document.getElementById('ccard1').hidden = false;
            document.getElementById('ccard2').hidden = false;
            document.getElementById('ccard3').hidden = false;
            document.getElementById('ccard4').hidden = false;
            document.getElementById('ccard5').hidden = false;
            document.getElementById('card1').required = true;
            document.getElementById('card2').required = true;
            document.getElementById('card3').required = true;
            document.getElementById('card4').required = true;
            document.getElementById('card5').required = true;
            break;
        }
      }