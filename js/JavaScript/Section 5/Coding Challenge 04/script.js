/*

*/

function Question(question,answer,correct){
	this.question = question;
	this.answer  = answer;
	this.correct = correct;
}

Question.prototype.quesName = function(){
	
	console.log(this.question);
	//console.log(this.answer.length);

	for (var i = 0; i < this.answer.length; i++) {
		console.log( i + ": " + this.answer[i]);
	}

}

Question.prototype.myAns = function(ans){
	if (this.correct == ans) {
		console.log('Correct Answer');
	} else {
		console.log('Wrong Answer');
	}
}

Question.prototype.nextQues = function(){

	console.log(this.question);

	for (var i = 0; i < this.answer.length; i++) {
		console.log( i + ": " + this.answer[i]);
	}

}

var q1 = new Question('Who are you?', ['Mahmud','John'], 0);

var q2 = new Question('Your profession?', ['Teacher', 'Programmer', 'Artist'], 1);

var q3 = new Question('Your country?', ['USA', 'UK', 'Bangladesh'], 2);

var quesList = [q1, q2, q3];

var num = Math.floor(Math.random() * quesList.length);

quesList[num].quesName();

var ans = prompt("Holla write the answer!");

//console.log(ans);

quesList[num].myAns(ans);

quesList[num].nextQues();
