/**
 * Ludo Orgânico — Questionário dos alunos (pré/pós-teste)
 * Backend em Google Apps Script + Google Sheets.
 *
 * COMO CONFIGURAR (resumo — veja o guia completo em LEIA-ME.docx):
 * 1. Crie uma Planilha Google nova, chamada por exemplo "Ludo Orgânico - Respostas".
 * 2. Nela, vá em Extensões > Apps Script.
 * 3. Apague o conteúdo padrão de Code.gs e cole este arquivo inteiro.
 * 4. Crie um novo arquivo HTML chamado exatamente "Index" e cole o conteúdo de Index.html.
 * 5. Clique em Implantar > Nova implantação > tipo "Aplicativo da Web".
 *    - Executar como: Eu (sua conta)
 *    - Quem pode acessar: Qualquer pessoa
 * 6. Autorize as permissões pedidas (é o seu próprio script, acessando sua própria planilha).
 * 7. Copie o link do aplicativo da web gerado — é esse link que você compartilha com os alunos
 *    (pode gerar um QR code a partir dele) e que entra em "Links Rápidos" no site do jogo.
 */

const SHEET_NAME = 'Respostas';

const HEADERS = [
  'Timestamp', 'Código do(a) aluno(a)', 'Turma', 'Momento',
  'Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8', 'Q9', 'Q10', 'Q11', 'Q12', 'Q13', 'Q14',
  'L1_gostei_diverti', 'L2_aumentou_interesse', 'L3_ajudou_entender', 'L4_facil_de_usar',
  'L5_fixou_conteudo', 'L6_mais_confianca', 'L7_recomendaria', 'L8_usaria_de_novo'
];

/** Serve a página do questionário (chamada quando o aluno abre o link). */
function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Ludo Orgânico — Questionário')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function getOrCreateSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

/**
 * Chamada pelo cliente (google.script.run) para salvar uma resposta.
 * `dados` é um objeto: { codigo, turma, momento, respostas: {q1..q14}, likert: {l1..l8} }
 */
function salvarResposta(dados) {
  if (!dados || !dados.codigo || !dados.momento) {
    throw new Error('Dados incompletos.');
  }

  const sheet = getOrCreateSheet_();
  const r = dados.respostas || {};
  const l = dados.likert || {};

  const row = [
    new Date(),
    String(dados.codigo).trim().toUpperCase(),
    String(dados.turma || '').trim(),
    dados.momento === 'pos' ? 'Pós-teste' : 'Pré-teste',
    r.q1 || '', r.q2 || '', r.q3 || '', r.q4 || '', r.q5 || '', r.q6 || '', r.q7 || '',
    r.q8 || '', r.q9 || '', r.q10 || '', r.q11 || '', r.q12 || '', r.q13 || '', r.q14 || '',
    l.l1 || '', l.l2 || '', l.l3 || '', l.l4 || '', l.l5 || '', l.l6 || '', l.l7 || '', l.l8 || ''
  ];

  sheet.appendRow(row);
  return { ok: true };
}
