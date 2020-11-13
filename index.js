if (typeof window != "undefined" || typeof document != "undefined") {



    let isBanglaOn = false;
    let isContiniousType = false;



    let newArrTypingText = [];
    let newArrTypingTextBangla = [];
    let currentValueArr = [];

    let isScoreShown = false;
    let hideTimesUp = false;
    let nightMood = true;
    let nightMoodEl = document.getElementById("nightMood");
    let continiousType = document.getElementById("continiousType");

    let minTimeEl = document.getElementById("minTimeEl");
    let quoteConteiner = document.getElementById("quoteConteiner");
    let textAreaContainer = document.getElementById("textAreaContainer");
    let typingText = document.getElementById("typingText");
    let typingTextBangla = document.getElementById("typingText2");
    let textarea = document.getElementById("textarea");
    let yourName = document.getElementById("yourName");
    let showResult = document.getElementById("showResult");

    let message = document.getElementById("message");
    let submit = document.getElementById("submit");

    let correctScore = document.getElementById('correctScore')
    let inCorrectScore = document.getElementById('inCorrectScore')
    let totalScore = document.getElementById('totalScore')
    let grossScore = document.getElementById('grossScore')
    let netScore = document.getElementById('netScore')
    let accuracyScore = document.getElementById('accuracyScore')
    let cardName = document.getElementById('cardName')
    let cardWPM = document.getElementById('cardWPM')
    let skillLevel = document.getElementById('skillLevel')


    let banglaOnEl = document.getElementById('banglaOn')
    let keyboardSelection = document.getElementById('keyboardSelection')

    let englishText = []
    if (!isBanglaOn) {
        englishText.push([
            "At the United Nations, 19 August is a day to reflect.",

            "This is a day to remember the brave humanitarian workers whose daily work can involve terrible dangers and even a risk to their lives.",

            "The UN has recently reported that, at the time of writing, the world's worst humanitarian crisis is in Yemen.",

            "Humanitarian workers must often risk their own lives to provide civilians with food, shelter or healthcare.",

            "In recent years, the UN has promoted this online hashtag.",

            "It may seem as if the problems of the world are impossible to fix, but there are a few things that you can do to help in some way.",

            "The importance of friends Friends come in all shapes and sizes.",

            "Declaring an international Friendship Day But friends are not only important on an individual level.",

            "The origins of the day An international celebration was first suggested by the World Friendship Crusade.",

            "Friendship Days around the world The International Day of Friendship on 30 July is not the only day celebrating friendship around the world.",

            "What do people do on the International Day of Friendship Wherever it's celebrated, the celebrations are very similar.",

            "Around the world, one in four people will have some kind of mental illness during their lifetime.",

            "World Mental Health(WMH) Day was first celebrated in 1992.",

            "Employers should create an environment which supports good mental health.",

            "Of course, we also need to look after our own mental health.",

            "Your diet can also change your mood.",

            "A good way of meeting new people",

            "World Mental Health Day encourages",
        ])
    } else {
        englishText.push([
            "আমি গুগল প্লে স্টোর ভার্শন ব্যবহার করি, এখন যদি আমি আবার এপ নতুন ভার্শনে আপডেট করি তাহলে কি আমাকে আবার সবকিছু নতুন করে ডাউনলোড করতে হবে? না, আপনাকে হাদিসের বা বইয়ের ডাটাবেস কোনটাই নতুন করে ডাউনলোড করতে হবে না যদি আপনার আগে থেকেই ডাউনলোড করা থাকে, তবে কুরআনের ডাটাবেস মুছে যাবে এবং এটি নতুন করে ডাউনলোড করতেই হবে আর এর কারন কুরআনের ডাটাবেস আপডেট করা হয়েছে এবং ভবিষ্যতে যাতে ব্যাকআপ রাখা যায় সেই সুবিধা যুক্ত করার কারনেই এটি নতুন করে ডাউনলোড করতে হবে, আর এটি মাত্র ৮ মেগাবাইটের থেকেও কম।",

            "আমি এর আগে কুরআনের ডাটাবেস ডাউনলোড করেছি কিন্তু কোনভাবেই মোবাইলে থাকে না, প্রতিবার নতুন করে ডাউনলোড করতে হয় এর কারন কি? আপনার ফোনে এক্সটারনাল ড্রাইভ না থাকার কারনে এই সমস্যা হয়েছে, কেননা কুরআনের ডাটাবেস এক্সটারনার ড্রাইভে ডাউনলোড হত। তবে খুশির সংবাদ এই যে বাংলা হাদিস ভার্শন ৭.০ থেকে কুরআনের ডাটাবেস সরাসরি ইন্টারনাল ড্রাইভেই ডাউনলোড হবে আর এতে বারবার মুছে যাবার সমস্যাও আর থাকবে না। এরপরও যদি আপনি চান তাহলে সেটি এক্সটারনাল ড্রাইভেও ত্রান্সফার করতে পারবেন।",

            "আমি আগে থেকে অফলাইন ভার্শন ব্যবহার করি যা আপনাদের ওয়েবসাইট থেকে ডাউনলোড করেছি এখন নতুন ভার্শন ৭.০ তে যাবার জন্য আমাকে কি করতে হবে? আপনাকে নতুন ভার্শন ৭.০ এর এপিকে বাংলা হাদিসের ওয়েব (hadithbd.com) থেকে ডাউনলোড করে ইন্সটল করে নিলেই চলবে, আগের ইন্সটল করার উপরেই এটি আপডেট হবে অর্থাৎ আপনাকে পুরাতন ভার্শন আনইন্সটল করার প্রয়োজন নেই।",

            "ভার্শন ৭.০ এ কি ডাটাবেস ফাইল এক্সটারনাল ড্রাইভে ট্র্যান্সফার করা যাবে? জি পারবেন ইন-শা-আল্লাহ। নতুন এই ভার্শন থেকেই আপনারা আপনাদের সমস্ত ফাইল এক্সটারনাল ড্রাইভে সরিয়ে রাখতে পারবেন এমনকি সরিয়ে রাখার পর যদি আপনি এপ আনইন্সটল করেও ফেলেন তথাপি আগের সব ফাইল রয়ে যাবে এবং পুনরায় যদি আবার এপ ইন্সটল করেন তাহলে স্বয়ংক্রিয় ভাবে আপনার আগের ব্যাকআপ করা সব ফাইল এপ কানেক্ট করে নিবে এবং নতুন করে কোন কিছুই আর আপনাকে ডাউনলোড করতে হবে না।",

        ])
    }



    banglaOnEl.addEventListener('change', (e) => {
        let rbs = document.querySelectorAll('input[name="layoutGrp"]')
        if (isBanglaOn) {
            isBanglaOn = false
            keyboardSelection.style.display = 'none'


            let selectedValue;
            for (const rb of rbs) {
                if (rb.checked) {
                    selectedValue = rb.value;

                    // rb.checked = true;
                    activeKeyBoard('bvkenglish', 'textarea');
                    break;
                } else {
                    rb.checked = false;
                }
            }

            switched = true;
            message.innerText = "English is Active Now"
        } else {
            let selectedValue;
            for (const rb of rbs) {
                if (rb.checked) {
                    selectedValue = rb.value;
                    // rb.checked = true;
                    rb.checked = false;
                    activeKeyBoard('bvkenglish', 'textarea');
                    break;
                } else {
                    rb.checked = false;
                    activeKeyBoard('bvkenglish', 'textarea');
                }
            }
            isBanglaOn = true
            keyboardSelection.style.display = 'block'


        }

    })



    let scoreInStore = JSON.parse(localStorage.getItem('score'))

    if (localStorage.getItem('score') != null) {
        correctScore.innerText = scoreInStore.correct
        inCorrectScore.innerText = scoreInStore.inCorrect
        totalScore.innerText = Math.floor(scoreInStore.totalWord)
        grossScore.innerText = Math.floor(scoreInStore.gross)
        netScore.innerText = Math.floor(scoreInStore.netWpm)
        accuracyScore.innerText = scoreInStore.accuracy + "%"
        cardName.innerText = scoreInStore.name
        cardWPM.innerText = Math.floor(scoreInStore.netWpm) + " WPM"

        if (scoreInStore.correct <= 30) {
            skillLevel.innerText = "Below Average"

        } else if (scoreInStore.correct <= 30) {
            skillLevel.innerText = "Average"

        } else if (scoreInStore.correct >= 31 || scoreInStore.correct <= 60) {
            skillLevel.innerText = "Expert"

        } else if (scoreInStore.correct >= 61 || scoreInStore.correct <= 200) {
            skillLevel.innerText = "Like a Pro"

        } else {
            skillLevel.innerText = "Modarate"

        }
    }


    //Save time in local storage
    let savedTime = localStorage.getItem("time");
    let name = localStorage.getItem("name");

    if (savedTime != "") {
        document.getElementById("selectedTime").value = savedTime;
        document.getElementById("yourName").value = name;
    } else {
        document.getElementById("selectedTime").value = "";
        document.getElementById("yourName").value = "";
    }

    function startCountDown(setTime, cb) {
        let currDate = new Date();

        let splitDate = currDate.toString().split(" ");

        let time = splitDate[4].split(":");

        let currentTime = time[1];
        cb(setTime);
    }


    let body = document.getElementById('body')
    let nightMoodSaved = localStorage.getItem('nightMood')
    if (nightMoodSaved && nightMood) {
        nightMood = false
        nightMoodEl.setAttribute('checked', 'checked')
        body.style.backgroundColor = '#444'
    } else {
        nightMood = true
        nightMoodEl.removeAttribute('checked', 'checked')
        body.style.backgroundColor = '#fff'
    }

    nightMoodEl.addEventListener('change', function(e) {

        localStorage.setItem('nightMood', nightMood)



        if (nightMood && nightMoodSaved) {
            nightMood = false
            nightMoodEl.setAttribute('checked', 'checked')

            body.style.backgroundColor = '#444'
        } else {
            nightMood = true
            nightMoodEl.removeAttribute('checked', 'checked')

            body.style.backgroundColor = '#fff'
        }

    })


    class Score {
        constructor(time, correct = 0, inCorrect = 0, word) {
            this.time = time
            this.correct = correct
            this.inCorrect = inCorrect
            this.totalWord = word
            this.netWpm = Math.floor(((correct + inCorrect - inCorrect) / time))
            this.gross = Math.floor(((correct + inCorrect) / time))
            this.accuracy = Math.floor((this.netWpm / this.gross) * 100)
            this.name = localStorage.getItem("name")
        }

        getScore() {
            const score = [{
                name: this.name,
                time: this.time,
                correct: this.correct,
                inCorrect: this.inCorrect,
                totalWord: this.totalWord,
                netWpm: this.netWpm,
                gross: this.gross,
                accuracy: this.accuracy,
            }, ];

            return score;
        }

        getItem() {
            return JSON.parse(localStorage.getItem("score"));
        }
    }

    function stopTypingShowResult(setTime = 0, correct = 0, incorrect = 0, totalWords = 0, cb) {

        submit.removeAttribute("disabled");
        submit.innerText = "Play Again...";
        let score = new Score(setTime, correct.length, incorrect.length, totalWords.length)
        localStorage.setItem('score', JSON.stringify(score))
        let saveScore = score.getItem()


        let totalTimeEl = document.getElementById("totalTime");
        let correctWordEl = document.getElementById("correctWord");
        let inCorrectWordEl = document.getElementById("inCorrectWord");
        let totalWordEl = document.getElementById("totalWord");
        let wpm = document.getElementById("wpm");
        let award = document.getElementById("award");
        let showName = document.getElementById("showName");



        minTimeEl.innerText = "Times Up... ";
        minTimeEl.style.color = "green";

        showResult.style.display = "block";
        message.style.display = "none";
        quoteConteiner.style.display = "none";
        textAreaContainer.style.display = "none";

        showName.innerText = saveScore.name
        totalTimeEl.innerText = `Total Time was: ${ saveScore.time } min`
        correctWordEl.innerText = `You Typed Correctly: ${saveScore.correct} Word`
        inCorrectWordEl.innerText = `You Made Mistake: ${saveScore.inCorrect} Word`
        totalWordEl.innerText = `Total Word was ${saveScore.totalWord}`
        wpm.innerText = ` ${saveScore.correct} correct Word Per ${saveScore.time} min`

        let groswpm = saveScore.gross
        let netwpm = saveScore.netWpm
        let accuracy
        if (saveScore.accuracy != null || saveScore.accuracy != 'NaN') {
            accuracy = saveScore.accuracy
        } else {
            accuracy = "0%"
        }

        if (correct.length <= 30) {
            skillLevel.innerText = "Avarage"
            wpm.style.color = "red"
            award.innerText = `Congratulation typing speed level is avarage or below avarage, You typed correctly ${correct.length} word Per ${setTime * 60000 / 1000 / 60} Minutes, Gross WPM is ${groswpm}, Net WPM ${netwpm} and accuracy ${accuracy}% per minutes`
        } else if (correct.length >= 31 || correct.length <= 60) {
            skillLevel.innerText = "Expert"
            wpm.style.color = "green"
            award.innerText = `Congratulation typing speed level is expert, You typed correctly ${correct.length} word Per ${setTime * 60000 / 1000 / 60} Minutes, Gross WPM is ${groswpm}, Net WPM ${netwpm} and accuracy ${accuracy}% per minutes`
        } else if (correct.length >= 61 || correct.length <= 200) {
            skillLevel.innerText = "Like a Pro"
            wpm.style.color = "green"
            award.innerText = `Congratulation typing speed level is like a Pro, You typed correctly ${correct.length} word Per ${setTime * 60000 / 1000 / 60} Minutes, Gross WPM is ${groswpm}, Net WPM ${netwpm} and accuracy ${accuracy}% per minutes`
        } else {
            skillLevel.innerText = "Modarate"
            wpm.style.color = "orange"
            award.innerText = `Congratulation typing speed level is modarate, You typed correctly ${correct.length} word Per ${setTime * 60000 / 1000 / 60} Minutes, Gross WPM is ${groswpm}, Net WPM {netwpm} and accuracy ${accuracy}%`
        }

        isScoreShown = true


    }


    //Call function via addEventListner
    textarea.addEventListener("keyup", readTextArea);
    submit.addEventListener("click", timeStorages);

    function countDown(a, interval) {
        if (a <= 0) {
            clearInterval(interval);
            return false;
        }



        minTimeEl.innerText = a + " Seconds";


    }

    function deleteInterVal(interval) {
        clearInterval(interval);
    }

    function timeStorages() {


        if (document.getElementById("selectedTime").value == "" || document.getElementById("yourName").value == "") {
            alert('Please set minutes and name')
            return;
        }
        submit.setAttribute("disabled", "disabled");

        if (isScoreShown == true) {
            window.location.reload();
            isScoreShown = false;
        }

        minTimeEl.innerText = "Starting...";
        minTimeEl.style.color = "green";

        // if (localStorage.getItem("score") == "") {
        //     showResult.style.display = "none";
        // } else {
        //     showResult.style.display = "none";
        // }
        message.style.display = "block";
        quoteConteiner.style.display = "block";
        textAreaContainer.style.display = "block";

        let selectedTime = document.getElementById("selectedTime").value;
        let remember = document.getElementById("remember");
        let yourName = document.getElementById("yourName").value;


        if (remember.checked) {
            localStorage.setItem("time", selectedTime);
            localStorage.setItem("name", yourName);

            selectedTime.value = localStorage.getItem("time");
            yourName.value = localStorage.getItem("name");

            message.innerText = "Great! Your time is started now...";

            startCountDown(localStorage.getItem("time"), function(setTime) {
                if (setTime) {

                    minTimeEl.innerText = "Starting...";

                    setTimeout(function() {
                        for (let i = 1; i <= 1; i++) {
                            if (i == 1) {
                                minTimeEl.innerText = "Go...";
                            }
                        }
                    }, 1000);
                }

                let countDecrement = 1;
                let a = (localStorage.getItem("time") * 60000) / 1000;

                let interval = setInterval(function() {
                    if (a >= 0) {
                        countDown(a - countDecrement, interval);
                        countDecrement++;
                    } else {
                        return false;
                    }
                }, 1000);

                setTimeout(function() {
                    let correct = document.querySelectorAll("#typingText span.correct");
                    let incorrect = document.querySelectorAll("#typingText span.incorrect");
                    let totalWords = document.querySelectorAll("#typingText span");

                    stopTypingShowResult(setTime, correct, incorrect, totalWords);

                }, setTime * 60000);
            });
        } else {
            localStorage.setItem("time", "");
            localStorage.setItem("name", "");
            document.getElementById("selectedTime").value = "";
            document.getElementById("yourName").value = "";
        }
    }

    function randNumber(num) {
        let rand = Math.floor(Math.random(3) * num) + 1;
        return rand;
    }

    function showRandomText(arr) {

        let rand = randNumber(16);


        let quoteText = "";

        let splitText = arr[0][rand].split(" ");
        splitText.forEach((word, index) => {

            let spans = document.createElement("span");

            spans.innerText = word + " ";

            newArrTypingText.push(spans.innerHTML);
            typingText.appendChild(spans);
            typingText.classList.add("showing");

        })

    }
    showRandomText(englishText);

    continiousType.addEventListener('change', function() {
        confirm('Note: Continious type will not count typing speed, its only for Typing Bangla and English')
        if (isContiniousType) {
            isContiniousType = false

            submit.removeAttribute("disabled");
        } else {
            isContiniousType = true
            submit.setAttribute("disabled", "disabled");


        }
    })

    function readTextArea(e) {
        let input = "";


        if (!isContiniousType && e.keyCode == 32) {



            let currentVal = e.target.value;

            if (currentVal.trim() != "") {
                currentValueArr.push(currentVal);

                //Reset Array value if type before start with time frame
                submit.addEventListener('click', function() {
                    if (currentValueArr.length != 0) {
                        currentValueArr.length = 0

                        //removing early type class but
                        let totalWords = document.querySelectorAll("#typingText span");
                        if (totalWords[0].hasAttribute('class')) {
                            let allSpan = [...totalWords]

                            for (let i = 0; i < allSpan.length; i++) {
                                allSpan[i].classList.remove('incorrect')
                                allSpan[i].classList.remove('correct')

                            }
                        }
                    }
                })

                let currSpan = document.querySelectorAll("#typingText span");
                console.log(currentValueArr, "i am here")
                if (currentValueArr.length == currSpan.length - 1) {
                    showRandomText(englishText);

                } else {
                    currSpan.forEach((wordSpan, index) => {


                        const typedWord = currentValueArr[index];

                        if (typedWord == null) {
                            wordSpan.classList.remove("correct");
                            wordSpan.classList.remove("incorrect");
                        } else if (typedWord == wordSpan.innerText) {
                            wordSpan.classList.add("correct");
                            wordSpan.classList.remove("incorrect");
                        } else {
                            wordSpan.classList.remove("correct");
                            wordSpan.classList.add("incorrect");
                        }
                    });
                }
            } else {
                alert("Empty Value, Please type correctly");
            }

            e.target.value = "";
        } else {

            if (!isContiniousType && e.key == "Enter") {
                e.target.value = "";
                message.innerHTML = "Do not hit Enter, Just Spacebar is allowed";
                message.style.opacity = "1";
                showHideMsg();
            }
        }
    }

    function showHideMsg(time = 1, msg, cssName) {
        setTimeout(function() {
            message.style.opacity = "0";
        }, time * 2000);
    }



}