//= require msdropdown/jquery.dd.min

function configura_parcelas(s){
	
	if (s.val() == '') {
		
		$(".avista").hide();
		$(".parcelas").hide();
		
	}else{
		
		$(".avista").show();
		$(".parcelas").show();
		
		// Bandeira Discover e JCB aceitam apenas pagamentos à vista
		if (s.val() == 'discover' || s.val() == 'jcb' ) {
			$(".parcelas").hide();
			$('.avista input').prop('checked', true);
		}
		
		// Removendo parcelas menores que R$ 5,00 - Regra da Cielo
		$( ".parcelas" ).each(function() {
		    if($(this).attr("value") < 5){
		    	$(this).hide();
		    }
		});

		
	}
}

$(function(){
	// Modifica o select das bandeiras
	$("select.bandeiras").msDropdown({
		roundedBorder: false,
		openDirection: 'alwaysDown', //auto || alwaysUp || alwaysDown
	});

		
	//Incicializa as parcelas
	configura_parcelas($("select.bandeiras"));
	
	// Executa ao modificar a bandeira do cartão
	$("select.bandeiras").change(function(){	
		configura_parcelas($(this));	
	});
});