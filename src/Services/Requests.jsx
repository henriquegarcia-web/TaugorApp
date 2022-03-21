export const ReturnStatus = (status) => {
  const newStatus = ( status === 'pendente'
    ? 'Pendente'
    : status === 'em_andamento'
    ? 'Em andamento'
    : status === 'finalizado'
    ? 'Finalizada'
    : 'Operação parada'
  )

  return newStatus
}

export const ReturnPriority = (priority) => {
  const newPriority = ( priority === 'baixa'
    ? 'Baixa'
    : priority === 'media'
    ? 'Média'
    : 'Alta'
  )

  return newPriority
}

export const ReturnImpactedUsers = (impacted_users) => {
  const newImpactedUsers = ( impacted_users === 1
    ? 'Apenas 1'
    : impacted_users === 2
    ? '1 a 10 usuários'
    : impacted_users === 3
    ? '11 a 30 usuários'
    : impacted_users === 4
    ? '31 a 50 usuários'
    : 'Mais de 50 usuários'
  )

  return newImpactedUsers
}

export const DataConverter = (string) => {
  if (!string || string === '') return ''

  const dateString = string.toDate()

  const day = dateString?.toString().slice(8, 10)
  const month = dateString?.toString().slice(4, 7)
  let newMonth = ''

  switch (month) {
    case 'Jan': newMonth = 'janeiro'; break;
    case 'Feb': newMonth = 'fevereiro'; break;
    case 'Mar': newMonth = 'março'; break;
    case 'Apr': newMonth = 'abril'; break;
    case 'May': newMonth = 'maio'; break;
    case 'Jun': newMonth = 'junho'; break;
    case 'Jul': newMonth = 'julho'; break;
    case 'Aug': newMonth = 'agosto'; break;
    case 'Sep': newMonth = 'setembro'; break;
    case 'Oct': newMonth = 'outubro'; break;
    case 'Nov': newMonth = 'novembro'; break;
    case 'Dec': newMonth = 'dezembro'; break;
    default: break;
  }
  
  const newString = `${day} de ${newMonth}`
  return newString
}

export const DataFilter = (data, entryText) => {
  let results = [];

  data.filter((type) => {
    if (
      type.id?.toString().includes(entryText.toString()) ||
      type.created_by.user_name?.toUpperCase().includes(entryText.toUpperCase()) ||
      type.title?.toUpperCase().includes(entryText.toUpperCase()) ||
      type.description?.toString().includes(entryText.toString()) ||
      type.product?.toUpperCase().includes(entryText.toUpperCase()) ||
      type.status?.toUpperCase().includes(entryText.toUpperCase()) ||
      type.priority?.toUpperCase().includes(entryText.toUpperCase()) ||
      type.problem?.toString().includes(entryText.toString())
    ) {
      results.push(type)
    }
  })

  return results
}