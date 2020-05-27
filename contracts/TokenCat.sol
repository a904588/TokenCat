pragma solidity ^0.5.8;

contract TokenCat {
    string  public name = "Catering Tecnun";
    string  public symbol = "TokenCat";
    string  public standard = "TokenCat v1.0";
    uint8   public decimals = 18; // same value as wei
    uint256 public totalSupply=10000;
    address public admin= msg.sender;
    struct Cliente{
        uint256 descuento;
        uint256 ultimopedido; //Fecha del ultimo pedido para poder modificarlo
    }
    struct PedidoStruct{
        uint256 primero;
        uint256 segundo;
        uint256 postre;
    }
    //Puede que no tengamos que poner Menu como una estructura ya que solo tiene un "atributo"

    struct Plato{
        uint256 contador;
        uint256 puntuacion;
        uint256 contadorPuntuacion;
    }
    struct Propuesta{
        uint256 VotosSi;
        uint256 NumVotos;
    }
    
    struct infoValoraciones{
        uint256 numval;
        uint256 val;
    }
    
    struct infoVotaciones{
        uint256 numvoto;
        uint256 voto;
    }
    /*struct SeguimientoClientes{
        address[] direccion;
    }*/

    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;
    //Asociamos al User con la  Dirección
    mapping(address => Cliente) public Usuario;
    //Asociamos el Menu con el día
    mapping(uint256 => uint256) public MenuDia;
    // Asociamos el día del mes con el codigo del pedido
    mapping(uint256 => mapping(uint256 => PedidoStruct)) public Pedidos;
    //Mapping entre la fecha y un address que devuelve el codigo de pedido
    mapping(uint256 => mapping(address => uint256)) public Codigo;
    // Asocia un ID con cada plato
    mapping(uint256 => Plato) public Platos;
    //Asocia el ID de cada propuesta con la Propuesta
    mapping(uint256 => Propuesta) public Propuestas;
    //Asociamos el user con un plato para guardar la valoración
    mapping(uint256 => mapping(address => infoValoraciones)) public Valoraciones;
    mapping(uint256 => mapping(address => infoVotaciones)) public Votaciones;
    /*mapping(uint256 => SeguimientoClientes) public ClientesDia;*/




    event Transfer(
        address indexed _from,
        address indexed _to,
        uint256 _value
    );

    event Approval(
        address indexed _owner,
        address indexed _spender,
        uint256 _value
    );

    constructor () public {
        balanceOf[msg.sender] = totalSupply;
        /*totalSupply = _initialSupply;*/
        // TODO: Handle fractional tokens
        // TODO: Trigger a transfer event when deploying
    }

    function transfer(address _to, uint256 _value) public returns (bool success) {
        require(balanceOf[msg.sender] >= _value);

        balanceOf[msg.sender] -= _value;
        balanceOf[_to] += _value;
        emit Transfer(msg.sender, _to, _value);

        return true;
    }

    function approve(address _spender, uint256 _value) public returns (bool success) {
        allowance[msg.sender][_spender] = _value;

        emit Approval(msg.sender, _spender, _value);

        return true;
    }

    function transferFrom(address _from, address _to, uint256 _value) public returns (bool success) {
        require(_value <= balanceOf[_from]);
        require(_value <= allowance[_from][msg.sender]);

        balanceOf[_from] -= _value;
        balanceOf[_to] += _value;
        allowance[_from][msg.sender] -= _value;

        emit Transfer(_from, _to, _value);

        return true;
    }

    function Compra(uint256 precio, uint256 id1, uint256 id2, uint256 id3, uint256 fecha, uint256 cod) public returns (bool success){
        /*Aqui debemos tenr en cuenta el descuento según la política que apliquemos*/
        require(Codigo[fecha][msg.sender]==0);
        if(Usuario[msg.sender].descuento==1){
            precio=90;
        }
        else if(Usuario[msg.sender].descuento==2){
            precio=85;
        }
        else if(Usuario[msg.sender].descuento==3){
            precio=82;
        }
        else if(Usuario[msg.sender].descuento>=4){
            precio=80;
        }
        else{
            precio=100;
        }
        Usuario[msg.sender].ultimopedido=fecha;
        transfer(admin, precio);
        /*Subimos el contador de cuántas veces se ha elegido un plato*/
        Platos[id1].contador+=1;
        Platos[id2].contador+=1;
        Platos[id3].contador+=1;
        /*Indicamos que eso platos han sido elegidos por X usuario*/
        Pedidos[fecha][cod].primero=id1;
        Pedidos[fecha][cod].segundo=id2;
        Pedidos[fecha][cod].postre=id3;
        Codigo[fecha][msg.sender]=cod;

        Usuario[msg.sender].descuento=0;
        /*Indicamos en el historial del cliente los platos que ha elegido*/
        //Usuario[msg.sender].PlatosElegidos[Usuario[msg.sender].PlatosElegidos.length+1]=id1;
        //Usuario[msg.sender].PlatosElegidos[Usuario[msg.sender].PlatosElegidos.length+1]=id2;
        //Usuario[msg.sender].PlatosElegidos[Usuario[msg.sender].PlatosElegidos.length+1]=id3;
        return true;
    }
    function ValorarPlato(uint256 id, uint256 puntuacion) public returns (bool success){
        require(puntuacion >= 0 && puntuacion <=5);
        require(Valoraciones[id][msg.sender].numval==0);
        require(balanceOf[msg.sender]>=100);
        Platos[id].puntuacion+=puntuacion;
        Platos[id].contadorPuntuacion+=1;
        Valoraciones[id][msg.sender].val=puntuacion;
        Valoraciones[id][msg.sender].numval=1;
        Usuario[msg.sender].descuento+=1;
        return true;
    }
    function EstablecerMenu(uint256 fecha, uint256 id) public returns (bool success){
        require(msg.sender==admin);
        MenuDia[fecha]=id;
        return true;
    }
    function VerMenu(uint256 fecha) public view returns (uint256 id){
        return(MenuDia[fecha]);
        /*        */
    }


    // Inicializamos la propuesta con 0 votos
    function IniciarPropuesta(uint256 id) public returns(bool success){
        Propuestas[id].VotosSi=0;
        Propuestas[id].NumVotos=0;
        return true;
    }
    function VotarPropuesta(uint256 id, uint256 voto) public returns(bool success){
        require (voto<=1 && voto >=0);
        require(Votaciones[id][msg.sender].numvoto==0);
        require(balanceOf[msg.sender]>=1000);
        Propuestas[id].VotosSi+=voto;
        Propuestas[id].NumVotos+=1;
        Votaciones[id][msg.sender].voto=voto;
        Votaciones[id][msg.sender].numvoto=1;
        Usuario[msg.sender].descuento+=1;
        return true;
    }
    function VerVotaciones(uint256 id) public view returns(uint256, uint256){
        return(Propuestas[id].VotosSi, Propuestas[id].NumVotos-Propuestas[id].VotosSi);
        /**/
    }
    /*function VerHistorial() public view returns(uint256[] memory, uint256[] memory, uint256[] memory, uint256[] memory, uint256[] memory){
        return(Usuario[msg.sender].PlatosElegidos,
            Usuario[msg.sender].platosVotados, 
            Usuario[msg.sender].Votaciones,
            Usuario[msg.sender].platosValorados,
            Usuario[msg.sender].Valoraciones);
    }*/
    function ModificarPedido(uint256 id1, uint256 id2, uint256 id3, uint256 fecha) public returns(bool success){
        require(Codigo[fecha][msg.sender]!=0);
        //Tenemos que restar los contadores de los pedidos
        Platos[Pedidos[fecha][Codigo[fecha][msg.sender]].primero].contador-=1;
        Platos[Pedidos[fecha][Codigo[fecha][msg.sender]].segundo].contador-=1;
        Platos[Pedidos[fecha][Codigo[fecha][msg.sender]].postre].contador-=1;

        Pedidos[fecha][Codigo[fecha][msg.sender]].primero=id1;
        Pedidos[fecha][Codigo[fecha][msg.sender]].segundo=id2;
        Pedidos[fecha][Codigo[fecha][msg.sender]].postre=id3;

        Platos[id1].contador+=1;
        Platos[id2].contador+=1;
        Platos[id3].contador+=1;
        return true;
    }
    function EstablecerPedido(uint256 fecha) public returns (bool success){
        Usuario[msg.sender].ultimopedido=fecha;
        return true;
    }


}