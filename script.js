$(document).ready(function () {
    var $messages = $('.messages-content');

    let i = 0;
    let msgId = 0;

    //Array to hold the responses
    let responses = [
        [], [], [], []
    ];

    let question_options = [
        {
            question: "What do you think are the two biggest problems in Nairobi city county?",
            question_number: 1,
            options: ["Traffic Jam", "Water", "Insecurity", "Unemployment", "Health"],
        },
        {
            question: "Which political leader do you trust in Nairobi City County?",
            question_number: 2,
            options: ["Maina Kamanda", "Johnson Sakaja", "Esther Passaris", "Mike Sonko", "Margaret Wanjiru"]
        },
        {
            question: "Who is your preferred Presidential candidate for 2022 election?",
            question_number: 3,
            options: ["Raila Odinga", "Musalia Mudavadi", "William Ruto", "Kalonzo Musyoka"]
        },
        {
            question: "Who would you elect as the next governor of Nairobi City County?",
            question_number: 4,
            options: ["Peter Kenneth", "Timothy Wanyonyi", "Johnson Sakaja", "Margaret Wanjiru", "Mike Sonko", "William Kabogo"]
        }


        // {
        //     question: "Who would you vote for as Nairobi Governor in 2022 Elections? (Enter text below)",
        //     question_number: 2,
        //     options: "",
        // },
        // {
        //     question: "Do you support BBI?",
        //     question_number: 7,
        //     options: ["Yes", "No", "I don't care"],
        // }
    ];

    document.querySelector('.message-input').disabled = true;

    $(window).load(function () {
        $messages.mCustomScrollbar();
        setTimeout(function () {
            fakeMessage();
        }, 100);
    });

    function updateScrollbar() {
        $messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
            scrollInertia: 10,
            timeout: 0
        });
    }

    // Inserts message
    // function insertMessage() {
    //     if (msgId === 5) return;
    //     if (msgId !== 1) clickedChoice();
    //     if (msgId === 1) {
    //         msg = $('.message-input').val();
    //         let text = msg.charAt(0).toUpperCase() + msg.slice(1).toLowerCase();
    //         if ($.trim(msg) == '') {
    //             return false;
    //         }
    //         if (msgId === 1) {
    //             $('<div class="message message-personal">' + text + '</div>').appendTo($('.mCSB_container')).addClass('new');
    //             responses[msgId].push(text);
    //             // console.log(responses)
    //         }
    //         // if (msgId === 9) {
    //         //     document.querySelector(`.question_${msgId}_options`).style.display = 'none';
    //         //     $('<div class="message message-personal">' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
    //         //     responses[msgId].push(msg);
    //         // }
    //         sendAdSurveyResponse(msgId + 1, text);
    //         sendBannerEngagementEvent(`question_${msgId + 1}_input_entered`);
    //         $('.message-input').val(null);
    //         text = "";
    //         msgId++;
    //     }

    //     updateScrollbar();
    //     setTimeout(function () {
    //         fakeMessage();
    //     }, 1000 + (Math.random() * 20) * 100);
    // }

    // Inserts message when choice is clicked
    function insertChoiceMade(choice) {
        if (choice == '') {
            return false;
        }
        $('<div class="message message-personal">' + choice + '</div>').appendTo($('.mCSB_container')).addClass('new');
        $('.message-input').val(null);
        updateScrollbar();
        setTimeout(function () {
            fakeMessage();
        }, 1000 + (Math.random() * 20) * 100);
    }

    // Inserts choice selected
    // $('.message-submit').click(function () {
    //     if (msgId === 1) insertMessage();
    // });

    // Inserts typed text
    // $(window).on('keydown', function (e) {
    //     if (msgId === 1) {
    //         if (e.which == 13) {
    //             insertMessage();
    //             return false;
    //         }
    //     } else {
    //         e.preventDefault();
    //     }
    // });

    // Questions with multiple choices
    let questionOneOptions = `
    <div class="options question_0_options">
        <ul>
            <li class="option" data-value="Traffic Jam">Traffic Jam</li>
            <li class="option" data-value="Water">Water</li>
            <li class="option" data-value="Insecurity">Insecurity</li>
        </ul>
        <ul> 
            <li class="option" data-value="Unemployment">Unemployment</li>
            <li class="option" data-value="Health">Health</li>
        </ul>
    </div>`;

    let questionTwoOptions = `
    <div class="options question_1_options">
        <ul>
            <li class="option" data-value="Maina Kamanda">Maina Kamanda</li>
            <li class="option" data-value="Johnson Sakaja">Johnson Sakaja</li>
            <li class="option" data-value="Esther Passaris">Esther Passaris</li>
        </ul>
        <ul> 
            <li class="option" data-value="Mike Sonko">Mike Sonko</li>
            <li class="option" data-value="Margaret Wanjiru">Margaret Wanjiru</li>
        </ul>
    </div>`;

    let questionThreeOptions = `
    <div class="options question_2_options">
        <ul>
            <li class="option" data-value="Raila Odinga">Raila Odinga</li>
            <li class="option" data-value="Musalia Mudavadi">Musalia Mudavadi</li>
        </ul>
        <ul>
            <li class="option" data-value="William Ruto">William Ruto</li>
            <li class="option" data-value="Kalonzo Musyoka">Kalonzo Musyoka</li>
        </ul>
    </div>`;

    let questionFourOptions = `
    <div class="options question_3_options">
        <ul>
            <li class="option" data-value="Peter Kenneth">Peter Kenneth</li>
            <li class="option" data-value="Timothy Wanyonyi">Timothy Wanyonyi</li>
            <li class="option" data-value="Johnson Sakaja">Johnson Sakaja</li>
            </ul>
        <ul>
            <li class="option" data-value="Margaret Wanjiru">Margaret Wanjiru</li>
            <li class="option" data-value="Mike Sonko">Mike Sonko</li>
            <li class="option" data-value="William Kabogo">William Kabogo</li>
        </ul>
    </div>`;





    // let questionThreeOptions = `
    // <div class="options question_2_options">
    //     <ul>
    //         <li class="option" data-value="Timothy Wanyonyi">Timothy Wanyonyi</li>
    //         <li class="option" data-value="Margaret Wanjiru">Margaret Wanjiru</li>
    //         <li class="option" data-value="Babu Owino">Babu Owino</li>
    //     </ul>
    //     <ul> 
    //     <li class="option" data-value="Johnson Sakaja">Johnson Sakaja</li>
    //     <li class="option" data-value="Mike Sonko">Mike Sonko</li>
    //     </ul>
    // </div>`;


    // let questionSevenOptions = `
    // <div class="options-three question_6_options">
    //     <ul>
    //         <li class="option" data-value="Yes">Yes</li>
    //     </ul>
    //     <ul>
    //         <li class="option" data-value="No">No</li>
    //     </ul>
    //     <ul>
    //         <li class="option" data-value="I don't care">I don't care</li>
    //     </ul>
    // </div>`;

    let choice = null;

    // Records choice
    function clickedChoice() {
        if (msgId === 4) return;
        // if (msgId === 9) {
        //     let questionOptionsDiv = document.querySelector(`.question_${msgId}_options`);
        //     let skipBtn = questionOptionsDiv.querySelector('.skip');

        //     skipBtn.addEventListener('click', () => {
        //         let choice = skipBtn.getAttribute("data-value");
        //         insertChoiceMade(choice);
        //         responses[msgId].push(choice);
        //         questionOptionsDiv.style.display = 'none';
        //         // sendAdSurveyResponse(msgId + 1, choice);
        //         // sendBannerEngagementEvent(`question_${msgId + 1}_option_${choice}_selected`);
        //         choice = '';
        //         msgId++;
        //         return;
        //     });
        // }
        // if (msgId === 2) {
        //     document.querySelector('#county-selected').addEventListener('change', (e) => {
        //         let county = e.target.value;
        //         let county_selected = county.charAt(0).toUpperCase() + county.slice(1).toLowerCase();
        //         insertChoiceMade(county_selected);
        //         responses[2].push(county_selected);
        //         document.querySelector('.question_2_options').style.display = 'none';
        //         // sendAdSurveyResponse(msgId + 1, county_selected);
        //         // sendBannerEngagementEvent(`question_${msgId + 1}_option_${county}_selected`);
        //         msgId++;
        //         return;
        //     });
        // }

        if (msgId === 0) {
            let questionOptionsDiv = document.querySelector(`.question_${msgId}_options`);
            let options = questionOptionsDiv.querySelectorAll('.option');

            choice = [];
            let questionOneSelections = [];
            // if (questionOneSelections.length == 0) {
            //     console.log("empty")
            //     options.forEach((option, i) => {
            //         option.addEventListener('click', () => {
            //             questionOneSelections.push(options[i].getAttribute("data-value"));
            //             console.log(options[i].getAttribute("data-value"))
            //         });
            //     });
            // }
            // options.forEach((option, i) => {
            //     option.addEventListener('click', () => {
            //         questionOneSelections.push(options[i].getAttribute("data-value"));
            //         console.log(options[i].getAttribute("data-value"))
            //     });
            // });

            // if (questionOneSelections.length == 1) {

            //     options.forEach((option, j) => {

            //         option.addEventListener('click', () => {
            //             console.log("with child")
            //             // // console.log(options[i].getAttribute("data-value"))
            //             // if (questionOneSelections.includes(options[j].getAttribute("data-value"))) {
            //             //     console.log("Includes")
            //             // }
            //             // // questionOneSelections.push(options[j].getAttribute("data-value")); 
            //         });
            //     });
            // }


            options.forEach((option, i) => {
                option.addEventListener('click', () => {
                    option.style.cssText = 'background-color: green; color: white';

                    if (questionOneSelections.length == 0) {
                        questionOneSelections.push(options[i].getAttribute("data-value"));
                    } else if (questionOneSelections.length == 1) {
                        if (!questionOneSelections.includes(options[i].getAttribute("data-value"))) {
                            questionOneSelections.push(options[i].getAttribute("data-value"));

                            choice = [...questionOneSelections];
                            insertChoiceMade(choice);
                            questionOptionsDiv.style.display = 'none';
                            responses[msgId].push(choice);
                            // console.log(responses);
                            sendAdSurveyResponse(msgId + 1, choice);
                            sendBannerEngagementEvent(`question_${msgId + 1}_option_${choice}_selected`);
                            choice = null;
                            msgId++;
                            return;
                        }
                    }
                });
            });
        }

        if (msgId === 1 || msgId === 2 || msgId === 3) {
            let questionOptionsDiv = document.querySelector(`.question_${msgId}_options`);
            let options = questionOptionsDiv.querySelectorAll('.option');

            options.forEach((option, i) => {
                option.addEventListener('click', () => {
                    choice = options[i].getAttribute("data-value");
                    // let first_word = choice.split(" ")[0];
                    insertChoiceMade(choice);
                    questionOptionsDiv.style.display = 'none';
                    responses[msgId].push(choice);
                    // console.log(responses)
                    sendAdSurveyResponse(msgId + 1, choice);
                    sendBannerEngagementEvent(`question_${msgId + 1}_option_${choice}_selected`);
                    // console.log(choice)
                    // console.log(responses);
                    choice = '';
                    msgId++;
                    return;
                });
            });
        }
    }

    var Fake = [
        {
            question: 'What do you think are the two biggest problems in Nairobi city county?',
            options: questionOneOptions
        },
        {
            question: 'Which political leader do you trust in Nairobi City County?',
            options: questionTwoOptions
        },
        {
            question: 'Who is your preferred Presidential candidate for 2022 election?',
            options: questionThreeOptions
        },
        {
            question: 'Who would you elect as the next governor of Nairobi City County?',
            options: questionFourOptions,
        }
    ];


    // Loads next question
    function fakeMessage() {
        if ($('.message-input').val() != '') {
            return false;
        }
        $('<div class="message loading new"><figure class="avatar"><img src="images/chatbot-avatar.png" /></figure><span></span></div>').appendTo($('.mCSB_container'));
        updateScrollbar();

        setTimeout(function () {
            $('.message.loading').remove();
            if (i === 4) {
                $('<div class="message new"><figure class="avatar"><img src="images/chatbot-avatar.png" /></figure>' + 'Thank you for completing the survey.' + '</div>').appendTo($('.mCSB_container')).addClass('new');
                updateScrollbar();
                // document.querySelector('.message-box').style.display = 'none';
                // console.log(responses)
                return;
            } else {
                $('<div class="message new"><figure class="avatar"><img src="images/chatbot-avatar.png" /></figure>' + Fake[i].question + '<br>' + Fake[i].options + '</div>').appendTo($('.mCSB_container')).addClass('new');
                clickedChoice();
                updateScrollbar();
                i++;
            }

        }, 1000 + (Math.random() * 20) * 100);
    }




    function sendAdSurveyResponse(question_number, response) {
        //  console.log(unique_id);

        let data = {
            "banner_id": creative_id,
            "banner_name": options.banner_name,
            "impression_unique_id": unique_id,
            ...question_options[question_number - 1],
            response: [response]
        };

        console.log(data);

        (async () => {
            const rawResponse = await fetch('https://dxp.mediapal.net/api/leadgen/adsurvey/create/1234567890', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const content = await rawResponse.json();

            console.log(content);
        })();
    }
});



