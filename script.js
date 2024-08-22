
	let getTagH = document.querySelector('.h')
	let getTagM = document.querySelector('.m')
	let getTagS = document.querySelector('.s')


	let nh = document.querySelector('.nh');
	let nm = document.querySelector('.nm');
	let ns = document.querySelector('.ns');
	
	let yuer = document.querySelector('.yuer');
	let mon = document.querySelector('.mon');
	let day = document.querySelector('.day');




	
		setInterval(()=>{
		
			let data = new Date();
			let getH = data.getHours();
			let getM = data.getMinutes();
			let getS = data.getSeconds();
			
	
			
		getTagS.style.cssText = `transform:rotate(${parseInt((getS / 60) * 360) - 90 }deg)`;
		getTagM.style.cssText = `transform:rotate(${parseInt((getM / 60) * 360) - 90}deg)`;
		getTagH.style.cssText = `transform:rotate(${parseInt((getH / 12) * 360) - 90}deg)`;
			
			let hh = getH > 13 ? getH - 12 : getH;
			nh.innerHTML= hh < 10 ? "0"+ hh : hh;
			nm.innerHTML= getM < 10 ? "0"+ getM : getM;
			ns.innerHTML= getS < 10 ? "0"+ getS : getS;
			
			let month = data.getMonth() + 1;
			let date = data.getDate();
			yuer.innerHTML = data.getFullYear();
			mon.innerHTML = month < 10 ? '0' + month : month;
			day.innerHTML =  date < 10 ? '0' + date : date;
			
		},1000)
		
		
		
		
		
		

