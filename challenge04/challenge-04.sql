SELECT 
    c.id AS codigo_cliente,
    c.razao_social,
    t.numero AS telefone
FROM 
    Clientes c
INNER JOIN 
    Estados e ON c.estado_codigo = e.codigo
LEFT JOIN 
    Telefones t ON c.id = t.cliente_id
WHERE 
    e.codigo = 'SP';
