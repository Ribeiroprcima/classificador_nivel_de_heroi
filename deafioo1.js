process.stdout.write("Qual é o nome do herói: ");

let nome;
let experiencia;
let nivel;

process.stdin.on('data', (data) => {

    if(!nome){
        nome = data.toString().trim();
        while(nome == ""){
            process.stdout.write("Campo para entrada do nome do herói: ")
            nome = data.toString().trim();
            break;
        }
        process.stdout.write("Insira o XP do herói: ")
    } else{
        experiencia = parseInt(data.toString().trim());

        if(experiencia <= 1000){
            nivel = "Ferro"
        } else if(experiencia >= 1001 && experiencia <= 2000){
            nivel = "Bronze"
        } else if(experiencia >= 2001 && experiencia <= 5000){
            nivel = "Prata"
        } else if(experiencia >= 5001 && experiencia <= 7000){
            nivel = "Ouro"
        } else if(experiencia >= 7001 && experiencia <= 8000){
            nivel = "Platina"
        } else if(experiencia >= 8001 && experiencia <= 9000){
            nivel = "Ascendente"
        } else if(experiencia >= 9001 && experiencia <= 10000){
            nivel = "Imortal"
        } else{
            nivel = "Radiante"
        }

        console.log(`O herói de nome ${nome} está no nível de ${nivel}.`)

        process.exit();
    }
})