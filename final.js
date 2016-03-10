// Main Page

// Slide Button Nav
$(function () {
    console.log('ready');

    $('#swipeButton').click(function () {
        console.log('click');
        $('#swipeButton').animate({
            left: 104,
        })
        $('section#navOverlay').animate({
            width: '80%',
            left: '0',
        });
        $('section#navOverlay p').css('visibility', 'visible').animate({
                opacity: 1,
            },
            1500
        );

        $('#swipeClose').css('visibility', 'visible');
        return false;
    });

    $('section#navClose').click(function () {
        console.log('click');
        $('section#navOverlay').animate({
            width: '0%',
            left: '0',
        });

        $('#swipeButton').animate({
            left: -210,
        })
        $('section#navOverlay p').css('visibility', 'hidden');
        $('#swipeClose').css('visibility', 'hidden');
        $('#swipeButton').css('visibility', 'visible');
        return false;
    });

    // Hamburger Helper Nav
    $('#helper').click(function () {
        console.log('click');

        var center = $(window).width() / 2;
        $('section#overlay').css('left', center);

        $('section#overlay').animate({
            width: '100%',
            left: '0',
        });

        $('section#overlay p').css('visibility', 'visible');
        return false;
    });

    $('nav#close').click(function () {
        console.log('click');
        $('section#overlay').css('width', '0px');
        $('section#overlay p').css('visibility', 'hidden');
        return false;
    });


    // Restaurants

    // Sort By
    $('#options').hide();
    $('#triangle').click(function () {
        console.log('slide toggle');
        $('#options').slideToggle();
    });

    $('#ethnicity').click(function () {
        console.log('click');
        $('#alpha').css('visibility', 'hidden')
        $('#ethnic').css('visibility', 'visible')
        $('#location').css('visibility', 'hidden')
        $('#options').slideToggle();
    });

    $('#alphabetical').click(function () {
        console.log('click');
        $('#ethnic').css('visibility', 'hidden')
        $('#alpha').css('visibility', 'visible')
        $('#location').css('visibility', 'hidden')
        $('#options').slideToggle();
    });

    $('#where').click(function () {
        console.log('click');
        $('#ethnic').css('visibility', 'hidden')
        $('#alpha').css('visibility', 'hidden')
        $('#location').css('visibility', 'visible')
        $('#options').slideToggle();
    });

    //Question 1
    $('#questionOne').hide();
    $('#startButton').click(function () {
        console.log('Start Button Click');
        $('#startButton').css('visibility', 'hidden');
        $('footer').css('visibility', 'hidden');
        $('section#questionOne').show();
    });
    $('section#questionTwo h6').hide();
    $('h5').hide();

    //Question 2

    //Q2A1 Bike

    $('p#qoneAnswerOne').click(function () {
        console.log('Question One Answer One Clicked');

        $('section#questionOne').css('visibility', 'hidden');
        $('section#questionTwo p').css('visibility', 'visible');
        $('section#questionTwo img').css('visibility', 'visible');
        $('section#questionTwo h6').show();
    });

    $('#bike').click(function () {
        console.log('Question One Answer One Clicked');

        $('section#questionOne').css('visibility', 'hidden');
        $('section#questionTwo p').css('visibility', 'visible');
        $('section#questionTwo img').css('visibility', 'visible');
        $('section#questionTwo h6').show();
    });

    //Q2A2 Walk

    $('p#qoneAnswerTwo').click(function () {
        console.log('Question One Answer Two Clicked');

        $('section#questionOne').css('visibility', 'hidden');
        $('section#questionTwo p').css('visibility', 'visible');
        $('section#questionTwo img').css('visibility', 'visible');
        $('section#questionTwo h6').show();
    });

    $('#footsteps').click(function () {
        console.log('Question One Answer Two Clicked');

        $('section#questionOne').css('visibility', 'hidden');
        $('section#questionTwo p').css('visibility', 'visible');
        $('section#questionTwo img').css('visibility', 'visible');
        $('section#questionTwo h6').show();
    });

    //Question 3

    //Q2A1

    $('p#qtwoAnswerOne').click(function () {
        console.log('Question Two Answer One Clicked');
        $('section#questionTwo p').css('visibility', 'hidden');
        $('section#questionTwo img').css('visibility', 'hidden');
        $('section#questionTwo h6').hide();
        $('section#questionThree p').css('visibility', 'visible');
        $('section#questionThree img').css('visibility', 'visible');
        $('h5').show();
    });
    $('#north').click(function () {
        console.log('Question Two Answer One Clicked');
        $('section#questionTwo p').css('visibility', 'hidden');
        $('section#questionTwo img').css('visibility', 'hidden');
        $('section#questionTwo h6').hide();
        $('section#questionThree p').css('visibility', 'visible');
        $('section#questionThree img').css('visibility', 'visible');
        $('h5').show();
        $('.east').hide();
        $('.south').hide();
        $('.west').hide();
        $('.car').hide();
        $('.bus').hide();
    });
    //Q2A2

    $('p#qtwoAnswerTwo').click(function () {
        console.log('Question Two Answer One Clicked');
        $('section#questionTwo p').css('visibility', 'hidden');
        $('section#questionTwo img').css('visibility', 'hidden');
        $('section#questionTwo h6').hide();

        $('section#questionThree p').css('visibility', 'visible');
        $('section#questionThree img').css('visibility', 'visible');

        $('h5').show();
    });

    $('#east').click(function () {
        console.log('Question Two Answer One Clicked');
        $('section#questionTwo p').css('visibility', 'hidden');
        $('section#questionTwo img').css('visibility', 'hidden');
        $('section#questionTwo h6').hide();

        $('section#questionThree p').css('visibility', 'visible');
        $('section#questionThree img').css('visibility', 'visible');
        $('.west').hide();
        $('.south').hide();
        $('.north').hide();
        $('.car').hide();
        $('.bus').hide();

        $('h5').show();
    });

    //Q2A3
    $('p#qtwoAnswerThree').click(function () {
        console.log('Question Two Answer One Clicked');
        $('section#questionTwo p').css('visibility', 'hidden');
        $('section#questionTwo img').css('visibility', 'hidden');
        $('section#questionTwo h6').hide();

        $('section#questionThree p').css('visibility', 'visible');
        $('section#questionThree img').css('visibility', 'visible');

        $('h5').show();
    });

    $('#south').click(function () {
        console.log('Question Two Answer One Clicked');
        $('section#questionTwo p').css('visibility', 'hidden');
        $('section#questionTwo img').css('visibility', 'hidden');
        $('section#questionTwo h6').hide();

        $('section#questionThree p').css('visibility', 'visible');
        $('section#questionThree img').css('visibility', 'visible');
        $('.east').hide();
        $('.west').hide();
        $('.north').hide();
        $('.car').hide();
        $('.bus').hide();

        $('h5').show();
    });

    //Q2A4

    $('p#qtwoAnswerFour').click(function () {
        console.log('Question Two Answer One Clicked');
        $('section#questionTwo p').css('visibility', 'hidden');
        $('section#questionTwo img').css('visibility', 'hidden');
        $('section#questionTwo h6').hide();

        $('section#questionThree p').css('visibility', 'visible');
        $('section#questionThree img').css('visibility', 'visible');

        $('h5').show();
    });

    $('#west').click(function () {
        console.log('Question Two Answer One Clicked');
        $('section#questionTwo p').css('visibility', 'hidden');
        $('section#questionTwo img').css('visibility', 'hidden');
        $('section#questionTwo h6').hide();

        $('section#questionThree p').css('visibility', 'visible');
        $('section#questionThree img').css('visibility', 'visible');
        $('h5').show();
        $('.east').hide();
        $('.south').hide();
        $('.north').hide();
        $('.car').hide();
        $('.bus').hide();
    });

    //Q1A3

    $('p#qoneAnswerThree').click(function () {
        console.log('Question Two Answer One Clicked');
        $('section#questionOne p').css('visibility', 'hidden');
        $('section#questionOne img').css('visibility', 'hidden');
        $('section#questionTwo h6').hide();

        $('section#questionThree p').css('visibility', 'visible');
        $('section#questionThree img').css('visibility', 'visible');

        $('h4').show();
    });

    $('#car').click(function () {
        console.log('Question Two Answer One Clicked');
        $('section#questionOne p').css('visibility', 'hidden');
        $('section#questionOne img').css('visibility', 'hidden');
        $('h4').hide();

        $('section#questionThree p').css('visibility', 'visible');
        $('section#questionThree img').css('visibility', 'visible');
        $('.east').hide();
        $('.west').hide();
        $('.north').hide();
        $('.south').hide();
        $('.bus').hide();
        $('h5').show();
    });

    $('p#qoneAnswerFour').click(function () {
        console.log('Question Two Answer One Clicked');
        $('section#questionOne p').css('visibility', 'hidden');
        $('section#questionOne img').css('visibility', 'hidden');
        $('h4').hide();

        $('section#questionThree p').css('visibility', 'visible');
        $('section#questionThree img').css('visibility', 'visible');

        $('h5').show();
    });

    $('#bus').click(function () {
        console.log('Question Two Answer One Clicked');
        $('section#questionOne p').css('visibility', 'hidden');
        $('section#questionOne img').css('visibility', 'hidden');
        $('h4').hide();

        $('section#questionThree p').css('visibility', 'visible');
        $('section#questionThree img').css('visibility', 'visible');
        $('.east').hide();
        $('.west').hide();
        $('.north').hide();
        $('.south').hide();
        $('.car').hide();
        $('h5').show();
    });

    //Question 4
    $('#bus').click(function () {
        console.log('Question Two Answer One Clicked');
        $('section#questionOne p').css('visibility', 'hidden');
        $('section#questionOne img').css('visibility', 'hidden');
        $('h4').hide();

        $('section#questionThree p').css('visibility', 'visible');
        $('section#questionThree img').css('visibility', 'visible');

        $('h5').show();
    });

    $('#cheap').click(function () {
        console.log('Question Three Answer One Clicked');
        $('section#questionThree p').css('visibility', 'hidden');
        $('section#questionThree img').css('visibility', 'hidden');
        $('section#questionFour p').css('visibility', 'visible');
        $('section#questionFour img').css('visibility', 'visible');
        $('section#questionFour h6').css('visibility', 'visible');
        $('h5').hide();
        $('.expensive').hide();


    });

    $('#inexpensive').click(function () {
        console.log('Question Three Answer One Clicked');
        $('section#questionThree p').css('visibility', 'hidden');
        $('section#questionThree img').css('visibility', 'hidden');
        $('h5').hide();
        $('section#questionFour p').css('visibility', 'visible');
        $('section#questionFour img').css('visibility', 'visible');
        $('section#questionFour h6').css('visibility', 'visible');
    });

    $('#moderate').click(function () {
        console.log('Question Three Answer One Clicked');
        $('section#questionThree p').css('visibility', 'hidden');
        $('section#questionThree img').css('visibility', 'hidden');
        $('h5').hide();
        $('section#questionFour p').css('visibility', 'visible');
        $('section#questionFour img').css('visibility', 'visible');
        $('section#questionFour h6').css('visibility', 'visible');

    });

    $('#expensive').click(function () {
        console.log('Question Three Answer One Clicked');
        $('section#questionThree p').css('visibility', 'hidden');
        $('section#questionThree img').css('visibility', 'hidden');
        $('h5').hide();
        $('section#questionFour p').css('visibility', 'visible');
        $('section#questionFour img').css('visibility', 'visible');
        $('section#questionFour h6').css('visibility', 'visible');
    });

    $('#vegetarian').click(function () {
        console.log('Question Four Answer One Clicked');
        $('section#questionFour p').css('visibility', 'hidden');
        $('section#questionFour img').css('visibility', 'hidden');
        $('section#questionFour h6').css('visibility', 'hidden');
        $('section#questionFive p').css('visibility', 'visible');
        $('section#questionFive img').css('visibility', 'visible');
        $('section#questionFive h6').css('visibility', 'visible');
        $('.none').hide();


    });

    $('#vegan').click(function () {
        console.log('Question Four Answer One Clicked');
        $('section#questionFour p').css('visibility', 'hidden');
        $('section#questionFour img').css('visibility', 'hidden');
        $('section#questionFour h6').css('visibility', 'hidden');
        $('section#questionFive p').css('visibility', 'visible');
        $('section#questionFive img').css('visibility', 'visible');
        $('section#questionFive h6').css('visibility', 'visible');
        $('.none').hide();
    });

    $('#gluten').click(function () {
        console.log('Question Four Answer One Clicked');
        $('section#questionFour p').css('visibility', 'hidden');
        $('section#questionFour img').css('visibility', 'hidden');
        $('section#questionFour h6').css('visibility', 'hidden');
        $('section#questionFive p').css('visibility', 'visible');
        $('section#questionFive img').css('visibility', 'visible');
        $('section#questionFive h6').css('visibility', 'visible');
        $('.none').hide();
    });

    $('#none').click(function () {
        console.log('Question Four Answer One Clicked');
        $('section#questionFour p').css('visibility', 'hidden');
        $('section#questionFour img').css('visibility', 'hidden');
        $('section#questionFour h6').css('visibility', 'hidden');
        $('section#questionFive p').css('visibility', 'visible');
        $('section#questionFive img').css('visibility', 'visible');
        $('section#questionFive h6').css('visibility', 'visible');
        $('.vegetarian').hide();

    });

    $('#togo').click(function () {
        console.log('Question Five Answer One Clicked');
        $('section#questionFive p').css('visibility', 'hidden');
        $('section#questionFive img').css('visibility', 'hidden');
        $('section#questionFive h6').css('visibility', 'hidden');
        $('section#images').css('visibility', 'visible');

    });

    $('#thirty').click(function () {
        console.log('Question Five Answer Two Clicked');
        $('section#questionFive p').css('visibility', 'hidden');
        $('section#questionFive img').css('visibility', 'hidden');
        $('section#questionFive h6').css('visibility', 'hidden');
        $('section#images').css('visibility', 'visible');
    });

    $('#fortyfive').click(function () {
        console.log('Question Five Answer Two Clicked');
        $('section#questionFive p').css('visibility', 'hidden');
        $('section#questionFive img').css('visibility', 'hidden');
        $('section#questionFive h6').css('visibility', 'hidden');
        $('section#images').css('visibility', 'visible');
    });

    $('#hour').click(function () {
        console.log('Question Five Answer Two Clicked');
        $('section#questionFive p').css('visibility', 'hidden');
        $('section#questionFive img').css('visibility', 'hidden');
        $('section#questionFive h6').css('visibility', 'hidden');
        $('section#images').css('visibility', 'visible');
    });
    $('#dnn').click(function () {
        console.log('NN Yes Clicked');
        $('section#images img').css('visibility', 'hidden');
        $('section#secondImagesNN img').css('visibility', 'visible');

    });

    $('#nn').click(function () {
        console.log('NN Yes Clicked');
        $('section#images img').css('visibility', 'hidden');
        $('section#secondImagesNN img').css('visibility', 'visible');

    });
    $('#dnv').click(function () {
        console.log('NN Yes Clicked');
        $('section#images img').css('visibility', 'hidden');
        $('section#secondImagesNN img').css('visibility', 'visible');

    });
    $('#nv').click(function () {
        console.log('NN Yes Clicked');
        $('section#images img').css('visibility', 'hidden');
        $('section#secondImagesNN img').css('visibility', 'visible');

    });

    $('#snn').click(function () {
        console.log('NN Yes Clicked');
        $('section#secondImagesNN img').css('visibility', 'hidden');
        $('section#thirdImagesNN img').css('visibility', 'visible');

    });

    $('#sdnn').click(function () {
        console.log('NN Yes Clicked');
        $('section#secondImagesNN img').css('visibility', 'hidden');
        $('section#thirdImagesNN img').css('visibility', 'visible');
    });

    $('#wn').click(function () {
        console.log('NN Yes Clicked');
        $('section#images img').css('visibility', 'hidden');
        $('section#secondImagesWest img').css('visibility', 'visible');
    });

    $('#wn').click(function () {
        console.log('West Yes Clicked');
        $('section#images img').css('visibility', 'hidden');
        $('section#secondImagesWest img').css('visibility', 'visible');
    });

    $('#dwn').click(function () {
        console.log('West Yes Clicked');
        $('section#images img').css('visibility', 'hidden');
        $('section#secondImagesWest img').css('visibility', 'visible');
    });

    $('#wv').click(function () {
        console.log('West Yes Clicked');
        $('section#images img').css('visibility', 'hidden');
        $('section#secondImagesWest img').css('visibility', 'visible');
    });

    $('#dwv').click(function () {
        console.log('West Yes Clicked');
        $('section#images img').css('visibility', 'hidden');
        $('section#secondImagesWest img').css('visibility', 'visible');
    });

    $('#swest').click(function () {
        console.log('West Yes Clicked');
        $('section#secondImagesWest img').css('visibility', 'hidden');
        $('section#thirdImagesWest img').css('visibility', 'visible');
    });

    $('#sdwest').click(function () {
        console.log('West Yes Clicked');
        $('section#secondImagesWest img').css('visibility', 'hidden');
        $('section#thirdImagesWest img').css('visibility', 'visible');
    });

    $('#sv').click(function () {
        console.log('West Yes Clicked');
        $('section#images img').css('visibility', 'hidden');
        $('section#secondImagesSouth img').css('visibility', 'visible');
    });

    $('#dsv').click(function () {
        console.log('West Yes Clicked');
        $('section#images img').css('visibility', 'hidden');
        $('section#secondImagesSouth img').css('visibility', 'visible');
    });

    $('#sn').click(function () {
        console.log('West Yes Clicked');
        $('section#images img').css('visibility', 'hidden');
        $('section#secondImagesSouth img').css('visibility', 'visible');
    });

    $('#dnv').click(function () {
        console.log('West Yes Clicked');
        $('section#images img').css('visibility', 'hidden');
        $('section#secondImagesSouth img').css('visibility', 'visible');
    });

    $('#ssouth').click(function () {
        console.log('West Yes Clicked');
        $('section#secondImagesSouth img').css('visibility', 'hidden');
        $('section#thirdImagesSouth img').css('visibility', 'visible');
    });

    $('#sdsouth').click(function () {
        console.log('West Yes Clicked');
        $('section#secondImagesSouth img').css('visibility', 'hidden');
        $('section#thirdImagesSouth img').css('visibility', 'visible');
    });

    $('#cv').click(function () {
        console.log('West Yes Clicked');
        $('section#images img').css('visibility', 'hidden');
        $('section#secondCar img').css('visibility', 'visible');
    });
    $('#dcv').click(function () {
        console.log('West Yes Clicked');
        $('section#images img').css('visibility', 'hidden');
        $('section#secondCar img').css('visibility', 'visible');
    });
    $('#cn').click(function () {
        console.log('West Yes Clicked');
        $('section#images img').css('visibility', 'hidden');
        $('section#secondCar img').css('visibility', 'visible');
    });
    $('#dcn').click(function () {
        console.log('West Yes Clicked');
        $('section#images img').css('visibility', 'hidden');
        $('section#secondCar img').css('visibility', 'visible');
    });
    $('#scar').click(function () {
        console.log('West Yes Clicked');
        $('section#secondCar img').css('visibility', 'hidden');
        $('section#thirdCar img').css('visibility', 'visible');
    });
    $('#sdcar').click(function () {
        console.log('West Yes Clicked');
        $('section#secondCar img').css('visibility', 'hidden');
        $('section#thirdCar img').css('visibility', 'visible');
    });
    $('#tnn').click(function () {
        console.log('West Yes Clicked');
        $('section#thirdImagesNN img').css('visibility', 'hidden');
        $('section#northResults h6 ').css('visibility', 'visible');
        $('section#northResults p ').css('visibility', 'visible');
        $('.try').css('visibility', 'visible');
    });
    $('#tdnn').click(function () {
        console.log('West Yes Clicked');
        $('section#thirdImagesNN img').css('visibility', 'hidden');
        $('section#northResults h6').css('visibility', 'visible');
        $('section#northResults p ').css('visibility', 'visible');
        $('.try').css('visibility', 'visible');
    });

    $('#tsouth').click(function () {
        console.log('West Yes Clicked');
        $('section#thirdImagesSouth img').css('visibility', 'hidden');
        $('section#southResults h6').css('visibility', 'visible');
        $('section#southResults p ').css('visibility', 'visible');
        $('.try').css('visibility', 'visible');
    });

    $('#tdsouth').click(function () {
        console.log('West Yes Clicked');
        $('section#thirdImagesSouth img').css('visibility', 'hidden');
        $('section#southResults h6').css('visibility', 'visible');
        $('section#southResults p ').css('visibility', 'visible');
        $('.try').css('visibility', 'visible');
    });

    $('#twest').click(function () {
        console.log('West Yes Clicked');
        $('section#thirdImagesWest img').css('visibility', 'hidden');
        $('section#westResults h6').css('visibility', 'visible');
        $('section#westResults p ').css('visibility', 'visible');
        $('.try').css('visibility', 'visible');
    });

    $('#tdwest').click(function () {
        console.log('West Yes Clicked');
        $('section#thirdImagesWest img').css('visibility', 'hidden');
        $('section#westResults h6').css('visibility', 'visible');
        $('section#westResults p ').css('visibility', 'visible');
        $('.try').css('visibility', 'visible');
    });

    $('#tcar').click(function () {
        console.log('West Yes Clicked');
        $('section#thirdCar img').css('visibility', 'hidden');
        $('section#carResults h6').css('visibility', 'visible');
        $('section#carResults p ').css('visibility', 'visible');
        $('.try').css('visibility', 'visible');
    });

    $('#tdcar').click(function () {
        console.log('West Yes Clicked');
        $('section#thirdCar img').css('visibility', 'hidden');
        $('section#carResults h6').css('visibility', 'visible');
        $('section#carResults p ').css('visibility', 'visible');
        $('.try').css('visibility', 'visible');
    });

})