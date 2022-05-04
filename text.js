// 부모(상속)
function AI(name,money){
	// this : AI로 부터 생성되는 오브젝트들
	this.q='name';  //새로 생성되는 오브젝트에 {q:'name'}추가해주셈
	this.w='money';
}

AI.prototype.name='kim';

// 자식(상속)
var bixby = new AI();
console.log(bixby.name);

