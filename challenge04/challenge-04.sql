SELECT 
    c.ID AS ClienteID,
    c.RazaoSocial,
    t.Numero AS Telefone
FROM 
    Clientes c
JOIN 
    Estados e ON c.EstadoID = e.ID
LEFT JOIN 
    Telefones t ON c.ID = t.ClienteID
WHERE 
    e.Codigo = 'SP';
