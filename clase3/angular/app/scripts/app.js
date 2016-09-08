// con 1 parametro hacemos un getter y con 2 parametros es un setter
angular
	.module('miApp',['ngAnimate'])
	.controller("miCtrl",function($scope){
		$scope.email = "mi@email.com";
		$scope.vista = 1; //a cada variable, se le asigna un listener, para que con un watch, al tener un cambio, se refresca en la vista. (este tipo de variables, se recomienda usar solo para uso en la vista, en caso de necesitar variables en el controlador, usar var.)
		$scope.cambiarVista = cambiarVista; //esto asigna la funcion entera.! en lugar del retorno de la misma
		$scope.form = {};
		$scope.enviar = enviar;
		$scope.enviado=true;
		$scope.usuarios = [{"id":1,"nombre":"William","apellido":"Hunter","email":"whunter0@guardian.co.uk","gender":"Male","img":"https://robohash.org/laboriosamperspiciatisnam.jpg?size=50x50\u0026set=set1"},
		{"id":2,"nombre":"Donald","apellido":"Cooper","email":"dcooper1@qq.com","gender":"Male","img":"https://robohash.org/maioresvoluptatemnon.bmp?size=50x50\u0026set=set1"},
		{"id":3,"nombre":"Virginia","apellido":"Wagner","email":"vwagner2@so-net.ne.jp","gender":"Female","img":"https://robohash.org/liberoculpaeligendi.bmp?size=50x50\u0026set=set1"},
		{"id":4,"nombre":"Joe","apellido":"Lawrence","email":"jlawrence3@businesswire.com","gender":"Male","img":"https://robohash.org/maximecumquedoloribus.bmp?size=50x50\u0026set=set1"},
		{"id":5,"nombre":"Jason","apellido":"Adams","email":"jadams4@about.me","gender":"Male","img":"https://robohash.org/sintetet.jpg?size=50x50\u0026set=set1"},
		{"id":6,"nombre":"Julia","apellido":"Long","email":"jlong5@myspace.com","gender":"Female","img":"https://robohash.org/quidemabinventore.bmp?size=50x50\u0026set=set1"},
		{"id":7,"nombre":"Jason","apellido":"Wright","email":"jwright6@soundcloud.com","gender":"Male","img":"https://robohash.org/sapientedistinctiotempore.bmp?size=50x50\u0026set=set1"},
		{"id":8,"nombre":"Maria","apellido":"Hill","email":"mhill7@bizjournals.com","gender":"Female","img":"https://robohash.org/dolorefacereaut.jpg?size=50x50\u0026set=set1"},
		{"id":9,"nombre":"Shirley","apellido":"Reynolds","email":"sreynolds8@huffingtonpost.com","gender":"Female","img":"https://robohash.org/consequaturlaborumrerum.bmp?size=50x50\u0026set=set1"},
		{"id":10,"nombre":"Gary","apellido":"Gray","email":"ggray9@reverbnation.com","gender":"Male","img":"https://robohash.org/minimavoluptatemtemporibus.bmp?size=50x50\u0026set=set1"},
		{"id":11,"nombre":"Antonio","apellido":"Ramirez","email":"aramireza@unesco.org","gender":"Male","img":"https://robohash.org/aliquidquasmollitia.png?size=50x50\u0026set=set1"},
		{"id":12,"nombre":"Patricia","apellido":"Nguyen","email":"pnguyenb@myspace.com","gender":"Female","img":"https://robohash.org/quiaquidemqui.bmp?size=50x50\u0026set=set1"},
		{"id":13,"nombre":"Nicholas","apellido":"Bennett","email":"nbennettc@lulu.com","gender":"Male","img":"https://robohash.org/etsintvel.jpg?size=50x50\u0026set=set1"},
		{"id":14,"nombre":"Andrea","apellido":"Lewis","email":"alewisd@netvibes.com","gender":"Female","img":"https://robohash.org/sapientevoluptatempariatur.bmp?size=50x50\u0026set=set1"},
		{"id":15,"nombre":"Pamela","apellido":"Watson","email":"pwatsone@stanford.edu","gender":"Female","img":"https://robohash.org/pariaturfugafacere.bmp?size=50x50\u0026set=set1"},
		{"id":16,"nombre":"Joyce","apellido":"Murray","email":"jmurrayf@cam.ac.uk","gender":"Female","img":"https://robohash.org/voluptatesmaioresratione.bmp?size=50x50\u0026set=set1"},
		{"id":17,"nombre":"Andrew","apellido":"Larson","email":"alarsong@zdnet.com","gender":"Male","img":"https://robohash.org/doloremagnitotam.png?size=50x50\u0026set=set1"},
		{"id":18,"nombre":"Dorothy","apellido":"Turner","email":"dturnerh@multiply.com","gender":"Female","img":"https://robohash.org/voluptatibusaspernaturnon.png?size=50x50\u0026set=set1"},
		{"id":19,"nombre":"Sara","apellido":"Gutierrez","email":"sgutierrezi@geocities.com","gender":"Female","img":"https://robohash.org/sedporroofficia.jpg?size=50x50\u0026set=set1"},
		{"id":20,"nombre":"Joan","apellido":"Fernandez","email":"jfernandezj@sakura.ne.jp","gender":"Female","img":"https://robohash.org/accusamusofficiaatque.bmp?size=50x50\u0026set=set1"},
		{"id":21,"nombre":"William","apellido":"King","email":"wkingk@imgur.com","gender":"Male","img":"https://robohash.org/quinequenostrum.jpg?size=50x50\u0026set=set1"},
		{"id":22,"nombre":"Wanda","apellido":"Hall","email":"whalll@sakura.ne.jp","gender":"Female","img":"https://robohash.org/dolorutsit.bmp?size=50x50\u0026set=set1"},
		{"id":23,"nombre":"Christine","apellido":"Hicks","email":"chicksm@webnode.com","gender":"Female","img":"https://robohash.org/velitaccusamuset.png?size=50x50\u0026set=set1"},
		{"id":24,"nombre":"Ruth","apellido":"Greene","email":"rgreenen@epa.gov","gender":"Female","img":"https://robohash.org/modiquaeexcepturi.jpg?size=50x50\u0026set=set1"},
		{"id":25,"nombre":"Andrew","apellido":"Bell","email":"abello@naver.com","gender":"Male","img":"https://robohash.org/culpaquiaet.jpg?size=50x50\u0026set=set1"},
		{"id":26,"nombre":"Nicole","apellido":"Porter","email":"nporterp@oakley.com","gender":"Female","img":"https://robohash.org/saepenostrumut.bmp?size=50x50\u0026set=set1"},
		{"id":27,"nombre":"Jean","apellido":"Cook","email":"jcookq@tmall.com","gender":"Female","img":"https://robohash.org/eumminimased.bmp?size=50x50\u0026set=set1"},
		{"id":28,"nombre":"Kathy","apellido":"Fields","email":"kfieldsr@google.ca","gender":"Female","img":"https://robohash.org/delenitiillotempore.jpg?size=50x50\u0026set=set1"},
		{"id":29,"nombre":"Marilyn","apellido":"Holmes","email":"mholmess@about.com","gender":"Female","img":"https://robohash.org/necessitatibusquialiquam.bmp?size=50x50\u0026set=set1"},
		{"id":30,"nombre":"Christopher","apellido":"Hall","email":"challt@indiatimes.com","gender":"Male","img":"https://robohash.org/namatquererum.jpg?size=50x50\u0026set=set1"},
		{"id":31,"nombre":"Willie","apellido":"Nichols","email":"wnicholsu@de.vu","gender":"Male","img":"https://robohash.org/doloremquisquamveritatis.bmp?size=50x50\u0026set=set1"},
		{"id":32,"nombre":"Jessica","apellido":"Schmidt","email":"jschmidtv@yahoo.com","gender":"Female","img":"https://robohash.org/fugiatnonut.bmp?size=50x50\u0026set=set1"},
		{"id":33,"nombre":"Victor","apellido":"Perez","email":"vperezw@squarespace.com","gender":"Male","img":"https://robohash.org/odiovoluptatemtenetur.jpg?size=50x50\u0026set=set1"},
		{"id":34,"nombre":"Phillip","apellido":"Torres","email":"ptorresx@google.co.uk","gender":"Male","img":"https://robohash.org/magnimaioresin.jpg?size=50x50\u0026set=set1"},
		{"id":35,"nombre":"Peter","apellido":"Fields","email":"pfieldsy@youtube.com","gender":"Male","img":"https://robohash.org/etnesciuntrepellat.png?size=50x50\u0026set=set1"},
		{"id":36,"nombre":"Bruce","apellido":"Richards","email":"brichardsz@clickbank.net","gender":"Male","img":"https://robohash.org/quiaconsequunturet.png?size=50x50\u0026set=set1"},
		{"id":37,"nombre":"Joan","apellido":"Martinez","email":"jmartinez10@ucla.edu","gender":"Female","img":"https://robohash.org/etdolorcorrupti.jpg?size=50x50\u0026set=set1"},
		{"id":38,"nombre":"Maria","apellido":"Smith","email":"msmith11@wordpress.com","gender":"Female","img":"https://robohash.org/quodsuscipitfugit.png?size=50x50\u0026set=set1"},
		{"id":39,"nombre":"Gloria","apellido":"Lawrence","email":"glawrence12@dagondesign.com","gender":"Female","img":"https://robohash.org/autquiased.bmp?size=50x50\u0026set=set1"},
		{"id":40,"nombre":"Emily","apellido":"Perez","email":"eperez13@blog.com","gender":"Female","img":"https://robohash.org/doloressimiliquerepudiandae.png?size=50x50\u0026set=set1"},
		{"id":41,"nombre":"Bobby","apellido":"Ross","email":"bross14@imageshack.us","gender":"Male","img":"https://robohash.org/laborenonquo.jpg?size=50x50\u0026set=set1"},
		{"id":42,"nombre":"Jonathan","apellido":"Hall","email":"jhall15@soup.io","gender":"Male","img":"https://robohash.org/cumvelid.bmp?size=50x50\u0026set=set1"},
		{"id":43,"nombre":"George","apellido":"Collins","email":"gcollins16@dedecms.com","gender":"Male","img":"https://robohash.org/similiqueducimusnesciunt.png?size=50x50\u0026set=set1"},
		{"id":44,"nombre":"Debra","apellido":"Bradley","email":"dbradley17@phpbb.com","gender":"Female","img":"https://robohash.org/enimveroautem.png?size=50x50\u0026set=set1"},
		{"id":45,"nombre":"Donald","apellido":"Hawkins","email":"dhawkins18@pen.io","gender":"Male","img":"https://robohash.org/eaiuremagnam.bmp?size=50x50\u0026set=set1"},
		{"id":46,"nombre":"Albert","apellido":"Hunt","email":"ahunt19@census.gov","gender":"Male","img":"https://robohash.org/aututautem.jpg?size=50x50\u0026set=set1"},
		{"id":47,"nombre":"Joe","apellido":"Gomez","email":"jgomez1a@ocn.ne.jp","gender":"Male","img":"https://robohash.org/delenitisimiliqueearum.jpg?size=50x50\u0026set=set1"},
		{"id":48,"nombre":"Ruby","apellido":"Carroll","email":"rcarroll1b@loc.gov","gender":"Female","img":"https://robohash.org/assumendaaratione.bmp?size=50x50\u0026set=set1"},
		{"id":49,"nombre":"Jane","apellido":"Perkins","email":"jperkins1c@arizona.edu","gender":"Female","img":"https://robohash.org/quilaudantiumquos.png?size=50x50\u0026set=set1"},
		{"id":50,"nombre":"Antonio","apellido":"King","email":"aking1d@csmonitor.com","gender":"Male","img":"https://robohash.org/velitnullaconsequatur.jpg?size=50x50\u0026set=set1"},
		{"id":51,"nombre":"Paula","apellido":"Bennett","email":"pbennett1e@alexa.com","gender":"Female","img":"https://robohash.org/earumnatusaut.bmp?size=50x50\u0026set=set1"},
		{"id":52,"nombre":"Peter","apellido":"Dean","email":"pdean1f@xing.com","gender":"Male","img":"https://robohash.org/consequaturtemporibusmaiores.jpg?size=50x50\u0026set=set1"},
		{"id":53,"nombre":"Jerry","apellido":"Franklin","email":"jfranklin1g@webmd.com","gender":"Male","img":"https://robohash.org/eaeteos.jpg?size=50x50\u0026set=set1"},
		{"id":54,"nombre":"Jimmy","apellido":"Fuller","email":"jfuller1h@phoca.cz","gender":"Male","img":"https://robohash.org/doloribusquiomnis.png?size=50x50\u0026set=set1"},
		{"id":55,"nombre":"Marie","apellido":"Richardson","email":"mrichardson1i@hatena.ne.jp","gender":"Female","img":"https://robohash.org/quiaenimporro.bmp?size=50x50\u0026set=set1"},
		{"id":56,"nombre":"Susan","apellido":"Armstrong","email":"sarmstrong1j@google.co.uk","gender":"Female","img":"https://robohash.org/delenitidolorein.png?size=50x50\u0026set=set1"},
		{"id":57,"nombre":"Jonathan","apellido":"Russell","email":"jrussell1k@go.com","gender":"Male","img":"https://robohash.org/assumendaidcum.bmp?size=50x50\u0026set=set1"},
		{"id":58,"nombre":"Carl","apellido":"Lane","email":"clane1l@cnn.com","gender":"Male","img":"https://robohash.org/eteosnon.png?size=50x50\u0026set=set1"},
		{"id":59,"nombre":"Ruth","apellido":"Morrison","email":"rmorrison1m@goo.ne.jp","gender":"Female","img":"https://robohash.org/rationeperspiciatisqui.png?size=50x50\u0026set=set1"},
		{"id":60,"nombre":"Maria","apellido":"Hamilton","email":"mhamilton1n@goo.ne.jp","gender":"Female","img":"https://robohash.org/dolorautnulla.png?size=50x50\u0026set=set1"},
		{"id":61,"nombre":"Alan","apellido":"Kelly","email":"akelly1o@lulu.com","gender":"Male","img":"https://robohash.org/corporisutqui.png?size=50x50\u0026set=set1"},
		{"id":62,"nombre":"Nicholas","apellido":"Hart","email":"nhart1p@vimeo.com","gender":"Male","img":"https://robohash.org/ipsamconsequaturmolestias.bmp?size=50x50\u0026set=set1"},
		{"id":63,"nombre":"Willie","apellido":"Stone","email":"wstone1q@google.de","gender":"Male","img":"https://robohash.org/eligendidolorea.bmp?size=50x50\u0026set=set1"},
		{"id":64,"nombre":"Robert","apellido":"Howell","email":"rhowell1r@samsung.com","gender":"Male","img":"https://robohash.org/rerumducimusrepellat.bmp?size=50x50\u0026set=set1"},
		{"id":65,"nombre":"Dorothy","apellido":"Knight","email":"dknight1s@imdb.com","gender":"Female","img":"https://robohash.org/incidunteiusiste.bmp?size=50x50\u0026set=set1"},
		{"id":66,"nombre":"Debra","apellido":"Elliott","email":"delliott1t@springer.com","gender":"Female","img":"https://robohash.org/velitomnisiste.png?size=50x50\u0026set=set1"},
		{"id":67,"nombre":"Amy","apellido":"Hamilton","email":"ahamilton1u@businessweek.com","gender":"Female","img":"https://robohash.org/laboriosamsapienteaut.bmp?size=50x50\u0026set=set1"},
		{"id":68,"nombre":"Susan","apellido":"Cox","email":"scox1v@cocolog-nifty.com","gender":"Female","img":"https://robohash.org/asperioreseumest.png?size=50x50\u0026set=set1"},
		{"id":69,"nombre":"Lori","apellido":"Adams","email":"ladams1w@amazonaws.com","gender":"Female","img":"https://robohash.org/remoccaecativoluptates.bmp?size=50x50\u0026set=set1"},
		{"id":70,"nombre":"Jean","apellido":"Franklin","email":"jfranklin1x@scribd.com","gender":"Female","img":"https://robohash.org/exetlibero.png?size=50x50\u0026set=set1"},
		{"id":71,"nombre":"Betty","apellido":"Riley","email":"briley1y@youku.com","gender":"Female","img":"https://robohash.org/providentquiquia.bmp?size=50x50\u0026set=set1"},
		{"id":72,"nombre":"Sarah","apellido":"Duncan","email":"sduncan1z@archive.org","gender":"Female","img":"https://robohash.org/adipiscisintmagni.jpg?size=50x50\u0026set=set1"},
		{"id":73,"nombre":"Kenneth","apellido":"Mason","email":"kmason20@goodreads.com","gender":"Male","img":"https://robohash.org/officiaperferendissunt.png?size=50x50\u0026set=set1"},
		{"id":74,"nombre":"Alice","apellido":"Reyes","email":"areyes21@is.gd","gender":"Female","img":"https://robohash.org/nullainaperiam.jpg?size=50x50\u0026set=set1"},
		{"id":75,"nombre":"Timothy","apellido":"Hill","email":"thill22@eventbrite.com","gender":"Male","img":"https://robohash.org/rationevelfuga.png?size=50x50\u0026set=set1"},
		{"id":76,"nombre":"Alan","apellido":"Graham","email":"agraham23@ebay.co.uk","gender":"Male","img":"https://robohash.org/quiaodiosint.bmp?size=50x50\u0026set=set1"},
		{"id":77,"nombre":"Eugene","apellido":"Rose","email":"erose24@nsw.gov.au","gender":"Male","img":"https://robohash.org/dignissimosetet.png?size=50x50\u0026set=set1"},
		{"id":78,"nombre":"Anna","apellido":"Pierce","email":"apierce25@ftc.gov","gender":"Female","img":"https://robohash.org/corporisaliquamet.bmp?size=50x50\u0026set=set1"},
		{"id":79,"nombre":"Brian","apellido":"Morris","email":"bmorris26@reverbnation.com","gender":"Male","img":"https://robohash.org/nihilvitaesed.jpg?size=50x50\u0026set=set1"},
		{"id":80,"nombre":"Amy","apellido":"Shaw","email":"ashaw27@ning.com","gender":"Female","img":"https://robohash.org/rerumvelquae.jpg?size=50x50\u0026set=set1"},
		{"id":81,"nombre":"Earl","apellido":"Franklin","email":"efranklin28@cam.ac.uk","gender":"Male","img":"https://robohash.org/iureestquos.png?size=50x50\u0026set=set1"},
		{"id":82,"nombre":"James","apellido":"Knight","email":"jknight29@github.io","gender":"Male","img":"https://robohash.org/accusamussimiliqueblanditiis.png?size=50x50\u0026set=set1"},
		{"id":83,"nombre":"Katherine","apellido":"Fernandez","email":"kfernandez2a@topsy.com","gender":"Female","img":"https://robohash.org/quianequedolorem.jpg?size=50x50\u0026set=set1"},
		{"id":84,"nombre":"Laura","apellido":"Davis","email":"ldavis2b@reuters.com","gender":"Female","img":"https://robohash.org/officiisnihilvelit.png?size=50x50\u0026set=set1"},
		{"id":85,"nombre":"Kathryn","apellido":"Kelley","email":"kkelley2c@webmd.com","gender":"Female","img":"https://robohash.org/totamexvoluptate.bmp?size=50x50\u0026set=set1"},
		{"id":86,"nombre":"John","apellido":"Kennedy","email":"jkennedy2d@berkeley.edu","gender":"Male","img":"https://robohash.org/iurequiaiusto.jpg?size=50x50\u0026set=set1"},
		{"id":87,"nombre":"Peter","apellido":"Rivera","email":"privera2e@state.tx.us","gender":"Male","img":"https://robohash.org/esteosea.png?size=50x50\u0026set=set1"},
		{"id":88,"nombre":"Ernest","apellido":"Adams","email":"eadams2f@pcworld.com","gender":"Male","img":"https://robohash.org/utconsequunturharum.jpg?size=50x50\u0026set=set1"},
		{"id":89,"nombre":"Patrick","apellido":"Holmes","email":"pholmes2g@virginia.edu","gender":"Male","img":"https://robohash.org/quasevenietin.jpg?size=50x50\u0026set=set1"},
		{"id":90,"nombre":"Jesse","apellido":"Wilson","email":"jwilson2h@jugem.jp","gender":"Male","img":"https://robohash.org/esthicfacere.png?size=50x50\u0026set=set1"},
		{"id":91,"nombre":"Jason","apellido":"Fisher","email":"jfisher2i@boston.com","gender":"Male","img":"https://robohash.org/quietomnis.png?size=50x50\u0026set=set1"},
		{"id":92,"nombre":"Alice","apellido":"Jackson","email":"ajackson2j@narod.ru","gender":"Female","img":"https://robohash.org/corruptiquibusdamminus.bmp?size=50x50\u0026set=set1"},
		{"id":93,"nombre":"Barbara","apellido":"Woods","email":"bwoods2k@who.int","gender":"Female","img":"https://robohash.org/suntlaboriosamrepellat.bmp?size=50x50\u0026set=set1"},
		{"id":94,"nombre":"Aaron","apellido":"George","email":"ageorge2l@squarespace.com","gender":"Male","img":"https://robohash.org/eaquequidemalias.bmp?size=50x50\u0026set=set1"},
		{"id":95,"nombre":"Tammy","apellido":"Jenkins","email":"tjenkins2m@edublogs.org","gender":"Female","img":"https://robohash.org/doloremqueidnostrum.bmp?size=50x50\u0026set=set1"},
		{"id":96,"nombre":"Philip","apellido":"King","email":"pking2n@i2i.jp","gender":"Male","img":"https://robohash.org/consequaturquibusdamtenetur.bmp?size=50x50\u0026set=set1"},
		{"id":97,"nombre":"James","apellido":"Lopez","email":"jlopez2o@bloglovin.com","gender":"Male","img":"https://robohash.org/reprehenderitsimiliquequaerat.jpg?size=50x50\u0026set=set1"},
		{"id":98,"nombre":"Johnny","apellido":"Ford","email":"jford2p@tumblr.com","gender":"Male","img":"https://robohash.org/dictaaliquamatque.jpg?size=50x50\u0026set=set1"},
		{"id":99,"nombre":"Sandra","apellido":"Moreno","email":"smoreno2q@marketwatch.com","gender":"Female","img":"https://robohash.org/etsitmolestias.bmp?size=50x50\u0026set=set1"},
		{"id":100,"nombre":"Brian","apellido":"Holmes","email":"bholmes2r@ustream.tv","gender":"Male","img":"https://robohash.org/molestiaeatvoluptate.bmp?size=50x50\u0026set=set1"}]

		function cambiarVista(vista){
			$scope.vista = vista;
		}

		function enviar(){
			console.log($scope.form);
			$scope.enviado=false;
		}
	})