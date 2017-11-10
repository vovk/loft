var $elems = document.getElementsByClassName('tab-wrapper');

for (var i = 0; i < $elems.length; i++) {
	$elems[i].addEventListener('click', handler);
}

function handler(e){
	var $items = this.parentNode.children;
	var items_child;
	var title_color;
	for (var i = 0; i < $items.length; i++) {
		items_child = $items[i].querySelector('.tab');
		items_child.classList.remove('tab-display');
	
		$items[i].querySelector('h3').classList.remove('title');


	}
	items_child = this.querySelector('.tab');
	items_child.classList.add('tab-display');

	this.querySelector('h3').classList.add('title');

	console.log($items);

}