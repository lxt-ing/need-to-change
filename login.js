$(function(){
	let data = [
{'姓名':'A','班级':'班级A','人数':30,'住处':'北京','学号':12,'年龄':84},
{'姓名':'B','班级':'班级D','人数':30,'住处':'上海','学号':22,'年龄':56},
{'姓名':'C','班级':'班级A','人数':30,'住处':'汕尾','学号':52,'年龄':16},
{'姓名':'D','班级':'班级A','人数':30,'住处':'天津','学号':1,'年龄':23},
{'姓名':'E','班级':'班级B','人数':30,'住处':'昌平','学号':13,'年龄':89},
{'姓名':'F','班级':'班级C','人数':30,'住处':'广州','学号':43,'年龄':5},
{'姓名':'G','班级':'班级D','人数':30,'住处':'湖南','学号':3,'年龄':15},
{'姓名':'H','班级':'班级E','人数':30,'住处':'重庆','学号':19,'年龄':98},
{'姓名':'I','班级':'班级A','人数':30,'住处':'天津','学号':39,'年龄':100},
{'姓名':'J','班级':'班级B','人数':30,'住处':'湖北','学号':46,'年龄':65}];

	$('<thead id="btop"></thead>').appendTo($('table'));
	$('<tbody id="bom"></tbody>').appendTo($('table'));
	// for(let i = 0;i < data.length ; i++){
	// 	for(let j = 0; j < data[i].length;j++){
	// 		console.log();
	// 	}
	// }
	for(let key in data){
		if(key == 0){
			$('<tr id="firstLine"></tr>').appendTo($('#btop'));
			for(let j in data[key]){
				$('<td class=""></td>').appendTo($('#firstLine')).text(j);
			}
		}
		var other = $('<tr class="otherline"></tr>');
		other.appendTo($('#bom'));
		for(let j in data[key]){
			$('<td class=""></td>').appendTo($(other)).text(data[key][j]);
		}
	}
	$('#firstLine>td:nth-child(5)').click(function(){
		let temp ;
		for(let i = 0;i < data.length;i++){
			for(let j = 0;j<data.length-1-i;j++){
				if(data[j]['年龄'] > data[j+1]['年龄']){	
					temp = data[j];
					data[j] = data[j+1];
					data[j+1] = temp;
				}
			}
			
		}
		for(let key in data){
			var other = $('.otherline')[key];
			var that = $(other).children('td');
			
				// let othertd = $(other).children();
				for(let i = 0;i < that.length;i++){
					for(let j in data[key]){
					console.log(data[key][j]);
					$(that[i]).text(data[key][j]);
				}
			}
		
		// other.appendTo($('#bom'));
		// for(let j in data[key]){
		// 	$('<td class=""></td>').appendTo($(other)).text(data[key][j]);
		// }
	}
	})
})