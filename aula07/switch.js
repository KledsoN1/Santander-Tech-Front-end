const permissoes = 'Admin'

switch(permissoes) {
    case 'Aluno':
        console.log('Você só pode visualizar as aulas')
        break
        case 'Professor':
            console.log('Você pode adicionar exercícios e editar as aulas.')
            break
            case 'Admin':
                console.log('Você pode editar o sistema')
                break
                default:
                    console.log('Não sei quem é você no sistema')
}