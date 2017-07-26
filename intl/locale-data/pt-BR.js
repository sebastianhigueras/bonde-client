export default {
  // page account login
  // filepath: /routes/admin/not-authenticated/account-login/page.js
  // routepath: /login
  'page--account-login.label.email': 'Email',
  'page--account-login.label.password': 'Senha',
  'page--account-login.placeholder.email': 'meu@email.com',
  'page--account-login.loading': 'Estamos quase lá...',
  'page--account-login.signin': 'QUERO ENTRAR',
  'page--account-login.ask-register': 'Quer subir no BONDE?',
  'page--account-login.cta-signup': 'Clique e pegue o seu lugar.',

  // page account register
  // filepath: /routes/admin/not-authenticated/account-register/page.js
  // routepath: /register
  'page--account-register.title': 'Chega mais que o BONDE é seu.',
  'page--account-register.form.name.label': 'Nome',
  'page--account-register.form.name.placeholder': 'Meu nome',
  'page--account-register.form.name.validation.required': 'Qual o seu nome?',
  'page--account-register.form.lastname.label': 'Sobrenome',
  'page--account-register.form.lastname.placeholder': 'Meu Sobrenome',
  'page--account-register.form.email.label': 'Email',
  'page--account-register.form.email.placeholder': 'meu@email.com.br',
  'page--account-register.form.email.validation.required': 'Qual o seu email?',
  'page--account-register.form.email.validation.invalid-email-format': 'Ops!Esse email não existe...',
  'page--account-register.form.password.label': 'Senha',
  'page--account-register.form.password.label.validation.required': 'Crie uma senha só sua',
  'page--account-register.form.password.label.validation.min-length': 'Sua senha precisa ter no minímo 8 caracteres.',
  'page--account-register.form.password-confirm.label': 'Confirme sua senha',
  'page--account-register.form.password-confirm.label.validation.match': 'Ops!Essa senha não confere...',
  'page--account-register.form.submit-button.default': 'Beleza!',
  'page--account-register.form.submit-button.saving': 'Só mais um pouco...',

  // page account edit
  // filepath: /routes/admin/authenticated/sidebar/account-edit/page.js
  // routepath: /account/edit
  'page--account-edit.header.title': 'Minha conta',
  'page--account-edit.header.tabs.user': 'Meu Perfil',
  'page--account-edit.form.name.label': 'Nome',
  'page--account-edit.form.lastname.label': 'Sobrenome',
  'page--account-edit.form.email.label': 'Email',

  // page subscription edit
  // filepath: /routes/public/subscription-edit/page.js
  // routepath: /subscriptions/:id/edit
  'page--subscription-edit.title': 'Minha Doação',
  'page--subscription-edit.helper-text': 'Escolha o que você quer alterar na sua doação:',
  'page--subscription-edit.button.creditcard': 'Cartão de crédito',
  'page--subscription-edit.button.recurring': 'Data da doação',

  // form subscription credit card
  // filepath: /client/subscriptions/forms/credit-card-form.js
  // routepath: /subscriptions/:id/edit
  'form--subscription-creditcard.helper-text': 'Aqui embaixo você consegue mudar os dados do seu cartão de crédito. Sua doação continuará igual mas, a partir do momento em que salvar os dados, o valor será cobrado no novo cartão ;)',

  'form--subscription-creditcard.previous-data.title': 'Dados do último cartão',
  'form--subscription-creditcard.previous-data.name': 'Nome',
  'form--subscription-creditcard.previous-data.expiration-date': 'Validade',

  'form--subscription-creditcard.form.number.label': 'Número',
  'form--subscription-creditcard.form.number.placeholder': 'Exemplo: 0000 0000 0000 0000',
  'form--subscription-creditcard.form.name.label': 'Nome',
  'form--subscription-creditcard.form.name.placeholder': '(do jeitinho que aparece no cartão)',
  'form--subscription-creditcard.form.expiration-date.label': 'Validade',
  'form--subscription-creditcard.form.expiration-date.placeholder': '00/00',
  'form--subscription-creditcard.form.cvv.label': 'CVV',
  'form--subscription-creditcard.form.cvv.placeholder': 'Ex: 000',
  'form--subscription-creditcard.form.submit-button.text': 'Salvar',
  'form--subscription-creditcard.form.validation.required': 'Obrigatório',

  // form subscription recurring
  // filepath: /client/subscriptions/forms/recurring-form.js
  // routepath: /subscriptions/:id/edit
  'form--subscription-recurring.helper-text': 'Quer alterar a data de cobrança da sua doação? É só mudar aqui embaixo. O valor da sua doação continuará igual, só será cobrado na nova data ;)',
  'form--subscription-recurring.form.process-at.label': 'Nova data de cobrança',
  'form--subscription-recurring.form.process-at.placeholder': 'Exemplo: DD/MM/AAAA',
  'form--subscription-recurring.form.submit-button.text': 'Salvar',
  'form--subscription-recurring.form.validation.required': 'Obrigatório',
  'form--subscription-recurring.form.validation.invalid-date-format': 'Ops!Esse formato de data no existe...',

  // notifications
  // filepath: /client/utils/notifications.js
  // routepath: /subscriptions/:id/edit
  'notification--generic-request-error.title': 'Ih, deu ruim!',
  'notification--generic-request-error.message': 'Não conseguimos salvar seu pedido :( Conte até dez e tente de novo.',
  'notification--generic-save-success.title': 'Oba!',
  'notification--generic-save-success.message': 'Salvamos seu pedido! Seus dados já estão alterados :)',

  // page community list
  // filepath: /routes/admin/authenticated/external/community-list/page.js
  // routepath: /community
  'page--community-list.title': 'Salve, salve {userFirstName},',
  'page--community-list.subtitle': 'Pegue um BONDE andando',
  'page--community-list.new': 'Ou crie um novo BONDE',

  // component community settings menu
  // filepath: /client/community/components/settings-menu.js
  // routepath:
  //   - /community/domain
  //   - /community/domain/add
  //   - /community/info
  //   - /community/mailchimp
  //   - /community/recipient
  //   - /community/report
  'community.components--settings-menu.title': 'Configurações do BONDE',
  'community.components--settings-menu.tabs.info': 'Informações',
  'community.components--settings-menu.tabs.mailchimp': 'Mailchimp',
  'community.components--settings-menu.tabs.recipient': 'Recebedor',
  'community.components--settings-menu.tabs.report': 'Relatórios',
  'community.components--settings-menu.tabs.domains': 'Domínios',

  // component community domain preview
  // filepath: /client/community/components/dns/dns-preview/domain-preview.js
  // routepath: /community/domain/add
  'community.components--domain-preview.li.domain.header': 'Domínio do seu BONDE',

  // component community subdomain preview
  // filepath: /client/community/components/dns/dns-preview/subdomain-preview.js
  // routepath: /community/domain
  'community.components--subdomain-preview.li.subdomain.header': 'Subdomínio',
  'community.components--subdomain-preview.li.record-type.header': 'Tipo',
  'community.components--subdomain-preview.li.redirect-to.header': 'Redirecionar para',

  // component community subdomain form
  // filepath: /client/community/components/dns/subdomain-form/index.js
  // routepath: /community/domain
  'community.components--subdomain-form.subdomain.label': 'Subdomínio',
  'community.components--subdomain-form.record-type.label': 'Tipo',
  'community.components--subdomain-form.redirect-to.label': 'Redirecionar para',
  'community.components--subdomain-form.button.text': 'Adicionar',

  // page community domain
  // filepath: /routes/admin/authenticated/sidebar/community-settings/domain/page.js
  // routepath: /community/domain
  'page--community-domain.form.validation.required': 'Você preisa preencher aqui',

  'page--community-domain.section--dns-hosted-zone.title': 'Domínios da comunidade',
  'page--community-domain.section--dns-hosted-zone.add': 'Adicionar novo domínio',
  'page--community-domain.section--dns-hosted-zone.menu.subdomains': 'Subdomínios',
  'page--community-domain.section--dns-hosted-zone.menu.remove': 'Remover domínio',
  'page--community-domain.section--dns-hosted-zone.menu.remove.dialog.text': 'Ei, quer mesmo remover o domínio {domainName}?',
  'page--community-domain.section--dns-hosted-zone.menu.check-dns': 'Verificar DNS',

  'page--community-domain.section--dns-records.title': 'Subdomínios externos',
  'page--community-domain.section--dns-records.add': 'Adicionar novo subdomínio externo',
  'page--community-domain.section--dns-records.menu.remove': 'Remover subdomínio',
  'page--community-domain.section--dns-records.menu.remove.dialog.text': 'Ei, quer mesmo remover o subdomínio {subdomainName}?',

  // component dialog
  // filepath: /client/ux/components/dialog/index.js
  // routepath: /community/domain
  'ux.components--dialog.button.confirm.text': 'Sim, está tudo ok',
  'ux.components--dialog.button.cancel.text': 'Cancelar',

  // page community domain create
  // filepath: /routes/admin/authenticated/sidebar/community-settings/domain-create/page.js
  // routepath: /community/domain/add
  'page--community-domain-create.title': 'Domínio do seu BONDE',

  'page--community-domain-create.step-add.title': 'Cadastre um domínio pro seu BONDE',
  'page--community-domain-create.step-add.form.domain-name.label': 'Insira aqui o domínio do BONDE',
  'page--community-domain-create.step-add.form.domain-name.placeholder': 'Ex. meubonde.org',
  'page--community-domain-create.step-add.form.domain-name.validation.required': 'Você precisa incluir um domínio.',
  'page--community-domain-create.step-add.form.domain-name.validation.invalid-domain-format': 'Ops! Formato de domínio inválido',
  'page--community-domain-create.step-add.form.button.text': 'Beleza!',

  'page--community-domain-create.step-dns-servers.title': 'Altere os servidores do seu provedor DNS',
  'page--community-domain-create.step-dns-servers.first-paragraph': '1. Faça login no seu provedor de DNS (onde seu domínio está registrado, por exemplo GoDaddy, Locaweb, RegistroBR)',
  'page--community-domain-create.step-dns-servers.second-paragraph': '2. Encontre a página de {dnsManager}, e altere os {serversName} para os servidores do BONDE:',
  'page--community-domain-create.step-dns-servers.second-paragraph.dns-manager': 'gerenciador de DNS',
  'page--community-domain-create.step-dns-servers.second-paragraph.servers-name': 'nomes de servidor',
  'page--community-domain-create.step-dns-servers.button.text': 'Beleza!',

  'page--community-domain-create.step-check.title': 'Teste a sua conexão',
  'page--community-domain-create.step-check.first-paragraph': 'Clique no botão abaixo e veja se tá tudo rolando.',
  'page--community-domain-create.step-check.second-paragraph': 'Fique ligado: a alteração de DNS pode demorar até 48 horas para ser propagada pela internet.',
  'page--community-domain-create.step-check.button.text': 'Tudo ok!',

  // page community info
  // filepath: /routes/admin/authenticated/sidebar/community-settings/info/page.js
  // routepath: /community/info
  'page--community-info.form.name.label': 'Nome',
  'page--community-info.form.name.validation.required': 'Qual o nome do seu BONDE?',
  'page--community-info.form.description.label': 'Descrição',
  'page--community-info.form.description.validation.required': 'Por que esse BONDE existe?',
  'page--community-info.form.city.label': 'Cidade',
  'page--community-info.form.city.validation.required': 'De qual cidade é o BONDE?',
  'page--community-info.form.custom-from-email.label': 'Email',
  'page--community-info.form.custom-from-email.helper-text': 'Esse email vai ser usado como remetente padrão do seu BONDE',
  'page--community-info.form.custom-from-email.validation.invalid-email-format': 'Ops!Parece que esse email não existe...',

  // component settings form
  // filepath: /client/ux/components/settings-form/index.js
  // routepath:
  //   - /account/edit
  //   - /community/info
  //   - /community/mailchimp
  //   - /community/recipient
  //   - /mobilizations/:mobilization_id/analytics
  //   - /mobilizations/:mobilization_id/basics
  //   - /mobilizations/:mobilization_id/customDomain
  //   - /mobilizations/:mobilization_id/sharing
  //   - /mobilizations/:mobilization_id/widgets/:widget_id/donation
  //   - /mobilizations/:mobilization_id/widgets/:widget_id/donation/autofire
  //   - /mobilizations/:mobilization_id/widgets/:widget_id/donation/finish
  //   - /mobilizations/:mobilization_id/widgets/:widget_id/form
  //   - /mobilizations/:mobilization_id/widgets/:widget_id/form/autofire
  //   - /mobilizations/:mobilization_id/widgets/:widget_id/form/finish
  //   - /mobilizations/:mobilization_id/widgets/:widget_id/pressure
  //   - /mobilizations/:mobilization_id/widgets/:widget_id/pressure/autofire
  //   - /mobilizations/:mobilization_id/widgets/:widget_id/pressure/email
  //   - /mobilizations/:mobilization_id/widgets/:widget_id/pressure/finish
  'ux.components--settings-form.button.text': 'Beleza!',
  'ux.components--settings-form.success-message': 'Tudo certo! Ateramos seus dados',

  // page community mailchimp
  // filepath: /routes/admin/authenticated/sidebar/community-settings/mailchimp/page.js
  // routepath: /community/mailchimp
  'page--community-mailchimp.form.api-key.label': 'API Key',
  'page--community-mailchimp.form.list-id.label': 'ID da lista',
  'page--community-mailchimp.form.group-id.label': 'ID do grupo',

  // page community new
  // filepath: /routes/admin/authenticated/external/community-new/page.js
  // routepath: /community/new
  'page--community-new.title': 'Qual é seu BONDE?',
  'page--community-new.subtitle': 'BONDES são grupos de ação que trabalham juntos mobilizando em torno de causas.',

  'page--community-new.form.name.label': 'Nome desse BONDE',
  'page--community-new.form.name.placeholder': 'Exemplo: Movimento 90º São Paulo',
  'page--community-new.form.city.label': 'Cidade do BONDE',
  'page--community-new.form.city.placeholder': 'Exemplo: São Paulo',
  'page--community-new.form.submit-button.text.default': 'Tudo ok!',
  'page--community-new.form.submit-button.text.saving': 'Só mais um pouco...',

  // page community new (connected)
  // filepath: /routes/admin/authenticated/external/community-new/page.connected.js
  // routepath: /community/new
  'page--community-new.form.name.validation.required': 'Qual o nome do seu BONDE?',
  'page--community-new.form.city.validation.required': 'Qual a cidade desse BONDE?',

  // page community recipient
  // filepath: /routes/admin/authenticated/sidebar/community-settings/recipient/page.js
  // routepath: /community/recipient
  'page--community-recipient.pagarme-warning': 'Preencha sua conta bancária abaixo para transferirmos automaticamente as doações recebidas pelo seu BONDE ;) Mas fique ligado: as doações só ficam disponíveis 31 dias depois do pagamento via cartão de crédito (29 dias corridos + 2 dias úteis) no caso de compras com uma parcela e 2 dias úteis depois de pagar o boleto bancário. Se a compra tiver de 2 a 12 parcelas, o recebimento normal será da seguinte forma: primeira parcela em 31 dias, segunda em 61, terceira em 91, e assim por diante.'

  'page--community-recipient.form.transfer-interval.label': 'Agendamento das transferências',
  'page--community-recipient.form.transfer-interval.value.weekly': 'Toda semana',
  'page--community-recipient.form.transfer-interval.value.monthly': 'Todo mês',
  'page--community-recipient.form.transfer-day.label': 'Dia da transferência',

  'page--community-recipient.section--account.header': 'Conta bancária',
  'page--community-recipient.form.bank-code.label': 'Banco',
  'page--community-recipient.form.bank-code.value.default': 'Escolha o banco',
  'page--community-recipient.form.bank-account-type.label': 'Tipo de conta',
  'page--community-recipient.form.bank-account-type.value.checking-account': 'Corrente',
  'page--community-recipient.form.bank-account-type.value.savings-account': 'Poupança',
  'page--community-recipient.form.bank-agency.label': 'Agência',
  'page--community-recipient.form.bank-agency-dv.label': 'Dígito',
  'page--community-recipient.form.bank-account.label': 'Conta',
  'page--community-recipient.form.bank-account-dv.label': 'Dígito',
  'page--community-recipient.form.bank-legal-name.label': 'Nome / Razão Social',
  'page--community-recipient.form.bank-document-number.label': 'CPF / CNPJ',

  // page community recipient (connected)
  // filepath: /routes/admin/authenticated/sidebar/community-settings/recipient/page.connected.js
  // routepath: /community/recipient
  'page--community-recipient.form.validation.required': 'Você precisa preecher aqui',
  'page--community-recipient.form.bank-agency.validation.max-length': 'Pode ter no máximo 5 dígitos',
  'page--community-recipient.form.bank-agency-dv.validation.length': 'Só pode ter 1 dígito',
  'page--community-recipient.form.bank-account.validation.max-length': 'Pode ter no máximo 13 dígitos',
  'page--community-recipient.form.bank-account-dv.validation.max-length': 'Pode ter no máximo 2 caracteres',
  'page--community-recipient.form.bank-document-number.validation.cnpj-length': 'O CNPJ pode ter no máximo 14 dígitos',
  'page--community-recipient.form.bank-document-number.validation.cpf-length': 'O CPF pode ter no máximo 11 dígitos',
  'page--community-recipient.form.bank-document-number.validation.invalid-cpf-format': 'Ops! Esse CPF não existe',
  'page--community-recipient.form.bank-document-number.validation.invalid-cnpj-format': 'Ops! Esse CNPJ não existe',

  // page community report
  // filepath: /routes/admin/authenticated/sidebar/community-settings/report/page.js
  // routepath: /community/report
  'page--community-report.section-button.donation.title': 'RELATÓRIO DE DOAÇÕES',
  'page--community-report.section-button.donation.helper-text': 'Quer saber tudo o que tá rolando nas doações do seu BONDE? Clique no botão abaixo.',
  'page--community-report.section-button.donation.text': 'Baixar',

  'page--community-report.section-button.actions.title': 'RELATÓRIO DE AÇÕES',
  'page--community-report.section-button.actions.helper-text': 'Quer saber tudo sobre as ações feitas no seu BONDE? Clique no botão abaixo.',
  'page--community-report.section-button.actions.text': 'Baixar',

  'page--community-report.section-button.activists.title': 'RELATÓRIO DE ATIVISTAS',
  'page--community-report.section-button.activists.helper-text': 'Quer saber tudo sobre os ativistas do seu BONDE? Clique no botão abaixo.',
  'page--community-report.section-button.activists.text': 'Baixar',

  // component sidebar
  // filepath: /client/components/navigation/sidebar/sidebar.js
  // routepath:
  //   - /account/edit
  //   - /community/domain
  //   - /community/domain/add
  //   - /community/info
  //   - /community/mailchimp
  //   - /community/recipient
  //   - /community/report
  //   - /mobilizations
  //   - /mobilizations/:mobilization_id/analytics
  //   - /mobilizations/:mobilization_id/basics
  //   - /mobilizations/:mobilization_id/blocks/create
  //   - /mobilizations/:mobilization_id/customDomain
  //   - /mobilizations/:mobilization_id/edit
  //   - /mobilizations/:mobilization_id/launch
  //   - /mobilizations/:mobilization_id/launch/end
  //   - /mobilizations/:mobilization_id/sharing
  //   - /mobilizations/:mobilization_id/templates/choose
  //   - /mobilizations/:mobilization_id/templates/choose/custom
  //   - /mobilizations/:mobilization_id/templates/choose/global
  //   - /mobilizations/:mobilization_id/templates/create
  //   - /mobilizations/:mobilization_id/widgets/:widget_id/donation
  //   - /mobilizations/:mobilization_id/widgets/:widget_id/donation/autofire
  //   - /mobilizations/:mobilization_id/widgets/:widget_id/donation/export
  //   - /mobilizations/:mobilization_id/widgets/:widget_id/donation/finish
  //   - /mobilizations/:mobilization_id/widgets/:widget_id/form
  //   - /mobilizations/:mobilization_id/widgets/:widget_id/form/autofire
  //   - /mobilizations/:mobilization_id/widgets/:widget_id/form/export
  //   - /mobilizations/:mobilization_id/widgets/:widget_id/form/fields
  //   - /mobilizations/:mobilization_id/widgets/:widget_id/form/finish
  //   - /mobilizations/:mobilization_id/widgets/:widget_id/pressure
  //   - /mobilizations/:mobilization_id/widgets/:widget_id/pressure/autofire
  //   - /mobilizations/:mobilization_id/widgets/:widget_id/pressure/email
  //   - /mobilizations/:mobilization_id/widgets/:widget_id/pressure/finish
  //   - /mobilizations/new
  //   - /mobilizations/templates/list
  'components.navigation--sidebar.community-settings.item.mobilizations': 'Meus BONDES',
  'components.navigation--sidebar.community-settings.item.info': 'Sobre',
  'components.navigation--sidebar.community-settings.item.mailchimp': 'Mailchimp',
  'components.navigation--sidebar.community-settings.item.recipient': 'Recebedor',
  'components.navigation--sidebar.community-settings.item.report': 'Relatórios',
  'components.navigation--sidebar.community-settings.item.domains': 'Domínios',

  'components.navigation--sidebar.mobilization-settings.item.launch': 'BOTAR BONDE NA RUA',
  'components.navigation--sidebar.mobilization-settings.item.launched': 'BONDE já tá na rua!',
  'components.navigation--sidebar.mobilization-settings.item.edit': 'Editar',
  'components.navigation--sidebar.mobilization-settings.item.add-block': 'Adicionar bloco de conteúdo',
  'components.navigation--sidebar.mobilization-settings.item.open-at-new-tab': 'Visualizar',
  'components.navigation--sidebar.mobilization-settings.item.config': 'Configurações',

  'components.navigation--sidebar.footer.account': 'Minha Conta',
  'components.navigation--sidebar.footer.sign-out': 'Sair',

  // component sidenav
  // filepath: /client/components/navigation/sidenav/sidenav.js
  // routepath:
  //   - /account/edit
  //   - /community/domain
  //   - /community/domain/add
  //   - /community/info
  //   - /community/mailchimp
  //   - /community/recipient
  //   - /community/report
  //   - /mobilizations
  //   - /mobilizations/:mobilization_id/analytics
  //   - /mobilizations/:mobilization_id/basics
  //   - /mobilizations/:mobilization_id/blocks/create
  //   - /mobilizations/:mobilization_id/customDomain
  //   - /mobilizations/:mobilization_id/edit
  //   - /mobilizations/:mobilization_id/launch
  //   - /mobilizations/:mobilization_id/launch/end
  //   - /mobilizations/:mobilization_id/sharing
  //   - /mobilizations/:mobilization_id/templates/choose
  //   - /mobilizations/:mobilization_id/templates/choose/custom
  //   - /mobilizations/:mobilization_id/templates/choose/global
  //   - /mobilizations/:mobilization_id/templates/create
  //   - /mobilizations/:mobilization_id/widgets/:widget_id/donation
  //   - /mobilizations/:mobilization_id/widgets/:widget_id/donation/autofire
  //   - /mobilizations/:mobilization_id/widgets/:widget_id/donation/export
  //   - /mobilizations/:mobilization_id/widgets/:widget_id/donation/finish
  //   - /mobilizations/:mobilization_id/widgets/:widget_id/form
  //   - /mobilizations/:mobilization_id/widgets/:widget_id/form/autofire
  //   - /mobilizations/:mobilization_id/widgets/:widget_id/form/export
  //   - /mobilizations/:mobilization_id/widgets/:widget_id/form/fields
  //   - /mobilizations/:mobilization_id/widgets/:widget_id/form/finish
  //   - /mobilizations/:mobilization_id/widgets/:widget_id/pressure
  //   - /mobilizations/:mobilization_id/widgets/:widget_id/pressure/autofire
  //   - /mobilizations/:mobilization_id/widgets/:widget_id/pressure/email
  //   - /mobilizations/:mobilization_id/widgets/:widget_id/pressure/finish
  //   - /mobilizations/new
  //   - /mobilizations/templates/list
  'components.navigation--sidenav.config': 'Configurações',
  'components.navigation--sidenav.change-community': 'Trocar',

  // page mobilizations list
  // filepath: /routes/admin/authenticated/sidebar/mobilizations-list/page.js
  // routepath: /mobilizations
  'page--mobilizations-list.page-header.title': 'Meus BONDES',
  'page--mobilizations-list.more-menu-action.open': 'Abrir',
  'page--mobilizations-list.more-menu-action.create-template': 'Transformar em template',

  // component mobilizations page header
  // filepath: /client/mobilizations/components/page-header.js
  // routepath:
  //   - /mobilizations
  //   - /mobilizations/templates/list
  'mobilizations.components--page-header.button.text': 'Novo BONDE',
  'mobilizations.components--page-header.tabs.actives': 'Todos',
  'mobilizations.components--page-header.tabs.templates': 'Templates',

  // component mobilizations list item: name
  // filepath: /client/mobilizations/components/list/items/name/index.js
  // routepath:
  //   - /mobilizations
  //   - /mobilizations/templates/list
  //   - /mobilizations/:mobilization_id/templates/choose/custom
  //   - /mobilizations/:mobilization_id/templates/choose/global
  //   - /mobilizations/:mobilization_id/templates/create
  'mobilizations.components--list.items.name.header.text': 'Nome',

  // component mobilizations list item: created at
  // filepath: /client/mobilizations/components/list/items/created-at.js
  // routepath:
  //   - /mobilizations
  //   - /mobilizations/templates/list
  //   - /mobilizations/:mobilization_id/templates/choose/custom
  //   - /mobilizations/:mobilization_id/templates/choose/global
  //   - /mobilizations/:mobilization_id/templates/create
  'mobilizations.components--list.items.created-at.header.text': 'Na rua desde',

  // component mobilizations list item: users
  // filepath: /client/mobilizations/components/list/items/users.js
  // routepath:
  //   - /mobilizations
  //   - /mobilizations/templates/list
  'mobilizations.components--list.items.users.header.text': 'Ativistas',

  // component mobilizations list item: fund raising
  // filepath: /client/mobilizations/components/list/items/fund-raising.js
  // routepath:
  //   - /mobilizations
  //   - /mobilizations/templates/list
  'mobilizations.components--list.items.fund-raising.header.text': 'Doações',
  'mobilizations.components--list.items.fund-raising.currency': 'R$',

  // component mobilizations page tab layout
  // filepath: /client/mobilizations/components/page-tab-layout.js
  // routepath:
  //   - /mobilizations/new
  //   - /mobilizations/:mobilization_id/templates/choose
  //   - /mobilizations/:mobilization_id/templates/choose/custom
  //   - /mobilizations/:mobilization_id/templates/choose/global
  'mobilizations.components--page-tab-layout.title': 'Novo BONDE',
  'mobilizations.components--page-tab-layout.tabs.goal': 'Causa',
  'mobilizations.components--page-tab-layout.tabs.templates': 'Templates',

  // page mobilizations new
  // filepath: /routes/admin/authenticated/sidebar/mobilizations-new/page.js
  // routepath: /mobilizations/new
  'page--mobilizations-new.title': 'Seu BONDE veio pra causar o quê?',
  'page--mobilizations-new.footer': 'Relaxa, você pode editar isso quando quiser.',

  // component mobilizations mobilization basics form
  // filepath: /client/mobilizations/components/mobilization-basics-form.js
  // routepath:
  //   - /mobilizations/new
  //   - /mobilizations/:mobilization_id/basics
  'mobilizations.components--basics-form.name.label': 'Nome',
  'mobilizations.components--basics-form.name.placeholder': 'Qual é o nome desse BONDE?',
  'mobilizations.components--basics-form.name.validation.required': 'Insira o nome',
  'mobilizations.components--basics-form.name.validation.max-length': 'Seu título tá muito longo :/',
  'mobilizations.components--basics-form.goal.label': 'Causa',
  'mobilizations.components--basics-form.goal.placeholder': 'Por que esse BONDE existe? O que tá querendo mudar no mundo?',
  'mobilizations.components--basics-form.goal.validation.required': 'Insira a causa',
  'mobilizations.components--basics-form.goal.validation.max-length': 'Ops! Texto muito longo :/',

  // component control buttons
  // filepath: /client/components/forms/control-buttons.js
  // routepath:
  //   - /account/edit
  //   - /community/domain
  //   - /community/domain/add
  //   - /community/info
  //   - /community/mailchimp
  //   - /community/new
  //   - /community/recipient
  //   - /login
  //   - /mobilizations/:mobilization_id/analytics
  //   - /mobilizations/:mobilization_id/basics
  //   - /mobilizations/:mobilization_id/customDomain
  //   - /mobilizations/:mobilization_id/launch
  //   - /mobilizations/:mobilization_id/sharing
  //   - /mobilizations/:mobilization_id/templates/create
  //   - /mobilizations/:mobilization_id/widgets/:widget_id/donation
  //   - /mobilizations/:mobilization_id/widgets/:widget_id/donation/autofire
  //   - /mobilizations/:mobilization_id/widgets/:widget_id/donation/finish
  //   - /mobilizations/:mobilization_id/widgets/:widget_id/form
  //   - /mobilizations/:mobilization_id/widgets/:widget_id/form/autofire
  //   - /mobilizations/:mobilization_id/widgets/:widget_id/form/finish
  //   - /mobilizations/:mobilization_id/widgets/:widget_id/pressure
  //   - /mobilizations/:mobilization_id/widgets/:widget_id/pressure/autofire
  //   - /mobilizations/:mobilization_id/widgets/:widget_id/pressure/email
  //   - /mobilizations/:mobilization_id/widgets/:widget_id/pressure/finish
  //   - /mobilizations/new
  //   - /register
  //   - /subscriptions/:id/edit
  'components--control-buttons.input.value.default': 'Beleza!',
  'components--control-buttons.input.value.saving': 'Só mais um pouco...',

  // page mobilizations templates choose
  // filepath: /routes/admin/authenticated/sidebar/templates-choose/page.js
  // routepath: /mobilizations/:mobilization_id/templates/choose
  'page--mobilizations.templates-choose.title': 'Como você quer começar?',
  'page--mobilizations.templates-choose.browsable-list-item.blank': 'Criar BONDE do zero',
  'page--mobilizations.templates-choose.browsable-list-item.templates-custom': 'Criar a partir dos meus templates',
  'page--mobilizations.templates-choose.browsable-list-item.templates-global': 'Criar a partir de templates globais',

  // component mobilizations templates selectable list
  // filepath: /client/mobilizations/templates/components/template-selectable-list.js
  // routepath:
  //   - /mobilizations/:mobilization_id/templates/choose/custom
  //   - /mobilizations/:mobilization_id/templates/choose/global
  'templates.components--selectable-list.filterable-search-bar.placeholder': 'Encontre um template',
  'templates.components--selectable-list.empty-list-text': 'Ai, não! Não existe nenhum template com esse nome :/',
  'templates.components--selectable-list.button.back': 'Voltar',
  'templates.components--selectable-list.button.next': 'Beleza!',

  // page mobilizations templates choose custom
  // filepath: /routes/admin/authenticated/sidebar/templates-choose-custom/page.js
  // routepath: /mobilizations/:mobilization_id/templates/choose/custom
  'page--mobilizations.templates-choose-custom.title': 'Meus Templates',

  // page mobilizations templates choose global
  // filepath: /routes/admin/authenticated/sidebar/templates-choose-global/page.js
  // routepath: /mobilizations/:mobilization_id/templates/choose/global
  'page--mobilizations.templates-choose-global.title': 'Templates Globais',

  // component mobilizations settings menu
  // filepath: /client/mobilizations/components/settings-menu.js
  // routepath:
  //   - /mobilizations/:mobilization_id/analytics
  //   - /mobilizations/:mobilization_id/basics
  //   - /mobilizations/:mobilization_id/customDomain
  //   - /mobilizations/:mobilization_id/sharing
  'mobilizations.components--settings-menu.title': 'Configure este BONDE',
  'mobilizations.components--settings-menu.tabs.info': 'O básico',
  'mobilizations.components--settings-menu.tabs.sharing': 'Compartilhamento',
  'mobilizations.components--settings-menu.tabs.domain': 'Domínio',

  // page mobilizations settings analytics
  // filepath: /routes/admin/authenticated/sidebar/mobilizations-settings-analytics/page.js
  // routepath: /mobilizations/:mobilization_id/analytics
  'page--mobilizations-analytics.first-paragraph': 'Quer analisar mais a fundo os resultados do seu BONDE? É só configurar uma conta no Google Analytics :).',
  'page--mobilizations-analytics.second-paragraph': 'Saca só:',
  'page--mobilizations-analytics.ol.create-analytics-account': ' Se ainda não tem, crie uma conta no Google Analytics {link}',
  'page--mobilizations-analytics.ol.create-analytics-account.link': 'clicando aqui',
  'page--mobilizations-analytics.ol.keep-up-with': 'Encontre sua ID de acompanhamento no Google Analytics - ela é um código que começa sempre com as letras "UA".',
  'page--mobilizations-analytics.ol.paste-ga-code': 'Copie a ID de acompanhamento e cole no campo abaixo:',
  'page--mobilizations-analytics.ol.form.ga-code.label': 'ID do Google Analytics',
  'page--mobilizations-analytics.ol.done': 'Pronto! Você já pode acompanhar as estatísticas do seu BONDE no Google Analytics!',

  // page mobilizations settings analytics (connected)
  // filepath: /routes/admin/authenticated/sidebar/mobilizations-settings-analytics/page.connected.js
  // routepath: /mobilizations/:mobilization_id/analytics
  'page--mobilizations-analytics.ol.form.ga-code.validation.invalid.ga-code.format': 'Digite uma ID válida',

  // page block create
  // filepath: /routes/admin/authenticated/sidebar/blocks-create/page.js
  // routepath: /mobilizations/:mobilization_id/blocks/create
  'page--block-create.title': 'Adicionar bloco de conteúdo',
  'page--block-create.tabs.blank-blocks': 'Customizando o bloco',
  'page--block-create.helper-text': 'Quando adicionar um novo bloco, ele vai sempre entrar no fim do seu BONDE, mas você pode trocá-lo de ordem sempre que quiser',
  'page--block-create.type.label': 'Layout do bloco',
  'page--block-create.background.label': 'Fundo do bloco',
  'page--block-create.background.image.placeholder.text': 'Se quiser, pode usar uma imagem como fundo :)',
  'page--block-create.button-add.text': 'Escolher imagem ',

  // page mobilizations domain
  // filepath: /routes/admin/authenticated/sidebar/mobilizations-settings-domain/page.js
  // routepath: /mobilizations/:mobilization_id/customDomain
  'page--mobilizations-domain.form-domain.success-message': 'Oba! Já salvamos os dados do seu domínio :)',

    // component mobilizations form domain
  // filepath: /client/mobilizations/components/form-domain.js
  // routepath:
  //   - /mobilizations/:mobilization_id/customDomain
  //   - /mobilizations/:mobilization_id/launch
  'mobilizations.components--form-domain.basic.header-toggle.use-existing-domain': 'Quero usar o domínio principal do meu BONDE',
  'mobilizations.components--form-domain.basic.header-toggle.create-domain': 'Quero cadastrar um domínio principal no meu BONDE',
  'mobilizations.components--form-domain.basic.helper-text': 'Digite aqui embaixo o subdomínio e escolha um domínio para o seu BONDE',
  'mobilizations.components--form-domain.basic.form.subdomain.label': 'Subdomínio',
  'mobilizations.components--form-domain.basic.form.subdomain.placeholder': 'nomedamob',
  'mobilizations.components--form-domain.basic.form.domain.label': 'Domínio Principal',
  'mobilizations.components--form-domain.basic.create-domain.helper-text': 'Ops, sua comunidade ainda não tem um domíno configurado. Quer cadastrar um agora? é só vir aqui {link}. Senão tudo bem, você pode usar um domínio externo aqui embaixo para configurar o seu BONDE.',
  'mobilizations.components--form-domain.basic.create-domain.helper-text.link': 'clique aqui',

  'mobilizations.components--form-domain.advanced.header-toggle': 'Quero usar um domínio externo',
  'mobilizations.components--form-domain.advanced.helper-text': 'Quer usar um domínio que você já comprou para o seu BONDE? Vem que dá. Por exemplo, se você já comprou www.meudominio.com.br é só preencher o campo aqui embaixo e seguir as orientações para usá-lo no seu BONDE:',
  'mobilizations.components--form-domain.advanced.form.external-domain.label': 'Já tenho um domínio',
  'mobilizations.components--form-domain.advanced.form.external-domain.placeholder': 'meudominio.com.br',

  'mobilizations.components--form-domain.cname-table.helper-text': '{strong}: você vai precisar configurar este domínio no seu servidor de registro para que o endereço seja redirecionado à página do seu BONDE. Pra isso, você vai precisar dessas informações aqui embaixo, pega aí:',
  'mobilizations.components--form-domain.cname-table.helper-text.strong': 'Não esqueça',
  'mobilizations.components--form-domain.cname-table.header.name': 'Nome',
  'mobilizations.components--form-domain.cname-table.header.record-type': 'Tipo',
  'mobilizations.components--form-domain.cname-table.header.data': 'Dados',
  'mobilizations.components--form-domain.cname-table.footer.helper-text': 'Se tiver alguma dúvida, dá uma olhada no tópico "Configurando seu domínio no BONDE", no nosso tutorial, aqui {link}.',

  // component mobrender mobilization
  // filepath: /client/mobrender/components/mobilization.js
  // routepath:
  //   - /mobilizations/:mobilization_id/edit
  //   - (public) /
  'mobrender.components--mobilization.footer.slogan': 'Feito pra causar. Feito com',

  // component mobrender block config menu
  // filepath: /client/mobrender/components/block-config-menu.js
  // routepath: /mobilizations/:mobilization_id/edit
  'mobrender.components--block-config-menu.item.change-background': 'Alterar fundo',
  'mobrender.components--block-config-menu.item.toggle-visibility.show': 'Mostrar',
  'mobrender.components--block-config-menu.item.toggle-visibility.hide': 'Esconder',
  'mobrender.components--block-config-menu.item.remove': 'Remover',
  'mobrender.components--block-config-menu.item.remove.confirm': 'Tem certeza que quer remover este bloco?',
  'mobrender.components--block-config-menu.item.move-up': 'Mover para cima',
  'mobrender.components--block-config-menu.item.move-down': 'Mover para baixo',

  // component mobrender block change background
  // filepath: /client/mobrender/components/block-change-background.js
  // routepath: /mobilizations/:mobilization_id/edit
  'mobrender.components--block-change-background.button.save': 'Salvar',
  'mobrender.components--block-change-background.button.cancel': 'Cancelar',

  // component navigation navbar edition wrapper
  // filepath: /client/components/navigation/navbar/navbar-edition-wrapper.js
  // routepath:
  //   - /mobilizations/:mobilization_id/edit
  //   - (public) /
  'components.navigation--navbar-edition-wrapper.block': 'Bloco',

  // component mobilizations form share
  // filepath: /client/mobilizations/components/form-share.js
  // routepath:
  //   - /mobilizations/:mobilization_id/launch
  //   - /mobilizations/:mobilization_id/sharing
  'mobilizations.components--form-share.facebook.title': 'Compartilhamento no Facebook',
  'mobilizations.components--form-share.facebook.helper-text': 'Deixe o post de Facebook do seu BONDE com a sua cara. Pra ele chegar causando, os textos precisam ser impactantes e curtos, para não aparecerem cortados. :)',
  'mobilizations.components--form-share.facebook.form.share-image.label': 'Imagem',
  'mobilizations.components--form-share.facebook.form.share-title.label': 'Título do post',
  'mobilizations.components--form-share.facebook.form.share-title.placeholder': 'Um título forte que apresente o seu BONDE',
  'mobilizations.components--form-share.facebook.form.share-description.label': 'Subtítulo do post',
  'mobilizations.components--form-share.facebook.form.share-description.placeholder': 'Complete a ideia do título e convide a galera pro seu BONDE',

  'mobilizations.components--form-share.twitter.title': 'Compartilhamento no Twitter',
  'mobilizations.components--form-share.twitter.helper-text': 'Deixe o tweet do seu BONDE com a sua cara. Toda vez que alguém twittar seu conteúdo, é desse jeito que ele vai pra timeline :)
  'mobilizations.components--form-share.twitter.form.share-text.label': 'Texto do Tweet',
  'mobilizations.components--form-share.twitter.form.share-text.placeholder': 'Crie uma frase e convide a galera pro seu BONDE',

  // page mobilizations launch
  // filepath: /routes/admin/authenticated/sidebar/mobilizations-launch/page.js
  // routepath: /mobilizations/:mobilization_id/launch
  'page--mobilizations-launch.title': 'Colocando seu BONDE na rua',
  'page--mobilizations-launch.steps.form-domain.title': 'Configure o endereço o BONDE',
  'page--mobilizations-launch.steps.form-share.title': 'Configure as informações de compartilhamento',
  'page--mobilizations-launch.steps.done.title': 'Seu BONDE está pronto!',
  'page--mobilizations-launch.steps.done.helper-text': 'Em uma nova aba, digite o endereço do seu BONDE e veja se ele já está no ar. Se ainda não estiver, dá uma olhada se cadastrou os domínios corretamente. Tudo certo? Então é só esperar ele propagar pela internet!',
  'page--mobilizations-launch.steps.done.button.open': 'Ver seu BONDE',
  'page--mobilizations-launch.button.saving': 'Só mais um pouco...',
  'page--mobilizations-launch.button.launch': 'Subir BONDE',
  'page--mobilizations-launch.button.next': 'Tudo certo!',
  'page--mobilizations-launch.form-share.validation.required': 'Obrigatório',

  // page mobilizations launch end
  // filepath: /routes/admin/authenticated/sidebar/mobilizations-launch-end/page.js
  // routepath: /mobilizations/:mobilization_id/launch/end
  'page--mobilizations-launch-end.heading.all-done': 'Tudo pronto?',
  'page--mobilizations-launch-end.heading.just-launch': 'Agora é só botar ele na rua e contar pra todo mundo!',
  'page--mobilizations-launch-end.title': 'Chegou a hora',
  'page--mobilizations-launch-end.button': 'Subir BONDE',

  // page templates list
  // filepath: /routes/admin/authenticated/sidebar/templates-list/page.js
  // routepath: /mobilizations/templates/list
  'page--templates-list.header.title': 'Seus templates',
  'page--templates-list.empty-list.no-template': 'Nenhum template criado.',
  'page--templates-list.empty-list.create-one': 'Copiar template de um BONDE.',
  'page--templates-list.empty-list.mobilization-list': 'Meus BONDES',
  'page--templates-list.more-menu-action.remove.text': 'Remover',
  'page--templates-list.more-menu-action.remove.confirm': 'Tem certeza que deseja remover este template? Se você confirmar, não vai conseguir mais desfazer a ação.',

  // page templates create
  // filepath: /routes/admin/authenticated/sidebar/templates-create/page.js
  // routepath: /mobilizations/:mobilization_id/templates/create
  'page--templates-create.header.title': 'Copiar template de um BONDE.',
  'page--templates-create.form.name.label': 'Nome do seu template',
  'page--templates-create.form.name.placeholder': 'Pela criação de uma delegacia de desaparecidos',
  'page--templates-create.form.goal.label': 'Descrição',
  'page--templates-create.form.goal.placeholder': 'Faça um texto curto e impactante, que chame a galera pra subir no seu BONDE. Você poderá alterar este texto depois.',

  // component donation widget settings menu
  // filepath: /client/mobilizations/widgets/__plugins__/donation/components/settings-menu.js
  // routepath:
  //   - /mobilizations/:mobilization_id/widgets/:widget_id/donation
  //   - /mobilizations/:mobilization_id/widgets/:widget_id/donation/autofire
  //   - /mobilizations/:mobilization_id/widgets/:widget_id/donation/finish
  'donation.components--settings-menu.title': 'Configure o bloco de doação',
  'donation.components--settings-menu.tabs.adjusts': 'Ajustes',
  'donation.components--settings-menu.tabs.autofire': 'Mensagem de agradecimento',
  'donation.components--settings-menu.tabs.post-action': 'Pós-doação',

  // page donation widget
  // filepath: /routes/admin/authenticated/sidebar/widgets-donation-settings/donation/page.js
  // routepath: /mobilizations/:mobilization_id/widgets/:widget_id/donation
  'page--donation-widget.header.title': 'Copiar template de um BONDE',
  'page--donation-widget.form.submit-button': 'Tudo certo!',
  'page--donation-widget.form.success-message': 'Pronto!Configuramos seu formulário de doação!',
  'page--donation-widget.form.donation-title.label': 'Título do bloco de doação',
  'page--donation-widget.form.donation-title.placeholder': 'Exemplo: Escolha um valor e contribua agora!',
  'page--donation-widget.form.payment-type.label': 'Tipo de doação',
  'page--donation-widget.form.payment-type.unique': 'Única',
  'page--donation-widget.form.payment-type.recurring': 'Recorrente',
  'page--donation-widget.form.payment-type.users-choice': 'Usuário escolhe',
  'page--donation-widget.form.payment-interval.label': 'Frequência',
  'page--donation-widget.form.payment-interval.monthly': 'Todo mês',
  'page--donation-widget.form.payment-interval.semiannually': 'Todo semestre',
  'page--donation-widget.form.payment-interval.annually': 'Todo ano',
  'page--donation-widget.form.main-color.label': 'Escolha a cor da página de pagamento',
  'page--donation-widget.form.main-color.helper-text': 'Selecione a cor no box aqui embaixo ou digite o valor em hex, por exemplo: #DC3DCE.',
  'page--donation-widget.form.donation-default-value.label': 'Escolha os valores para o bloco de doação',
  'page--donation-widget.form.donation-default-value.helper-text': 'Você pode ter até 5 valores por bloco de doação. Preencha apenas com números inteiros (Ex: 50)',
  'page--donation-widget.form.default-value-01.label': 'Valor 1',
  'page--donation-widget.form.default-value-01.placeholder': 'R$20',
  'page--donation-widget.form.default-value-02.label': 'Valor 2',
  'page--donation-widget.form.default-value-02.placeholder': 'R$50',
  'page--donation-widget.form.default-value-03.label': 'Valor 3',
  'page--donation-widget.form.default-value-03.placeholder': 'R$100',
  'page--donation-widget.form.default-value-04.label': 'Valor 4',
  'page--donation-widget.form.default-value-04.placeholder': 'R$200',
  'page--donation-widget.form.default-value-05.label': 'Valor 5',
  'page--donation-widget.form.default-value-05.placeholder': 'R$500',
  'page--donation-widget.form.default-value.radio.text': 'Default',
  'page--donation-widget.form.default-value.helper-text': '*todos os valores são em reais',
  'page--donation-widget.form.button-text.label': 'Texto do botão de doação',
  'page--donation-widget.form.button-text.placeholder': 'Exemplo: Doe agora!',
  'page--donation-widget.form.payment-method.label': 'Habilitar pagamento por boleto?',
  'page--donation-widget.form.payment-method.helper-text': 'Cada boleto pago terá um custo adicional de R$3,00',
  'page--donation-widget.form.payment-method.radio.yes': 'Sim',
  'page--donation-widget.form.payment-method.radio.no': 'Não',
  'page--donation-widget.form.bank-account.label': 'Conta bancária',
  'page--donation-widget.form.bank-account.helper-text': 'Este bloco de doação está associado à conta correspondente da cidade no Pagar.me.',

  // page donation widget (connected)
  // filepath: /routes/admin/authenticated/sidebar/widgets-donation-settings/donation/page.connected.js
  // routepath: /mobilizations/:mobilization_id/widgets/:widget_id/donation
  'page--donation-widget.form.validation.button-text.required': 'Crie o texto do botão',
  'page--donation-widget.form.validation.button-text.max-length': 'opa! Você atingiu olimite de caracteres.',

  // component widget autofire
  // filepath: /client/mobilizations/widgets/components/form-autofire.js
  // routepath:
  //   - /mobilizations/:mobilization_id/widgets/:widget_id/donation/autofire
  //   - /mobilizations/:mobilization_id/widgets/:widget_id/form/autofire
  //   - /mobilizations/:mobilization_id/widgets/:widget_id/pressure/autofire
  'widgets.components--form-autofire.form.submit-button': 'Tudo certo!',
  'widgets.components--form-autofire.form.success-message': 'Pronto! Já configuramos sua mensagem de agradecimento!',
  'widgets.components--form-autofire.form.sender-name.label': 'Nome do remetente',
  'widgets.components--form-autofire.form.sender-name.placeholder': 'Digite o nome que vai aparecer na mensagem enviada.',
  'widgets.components--form-autofire.form.sender-email.label': 'Email remetente',
  'widgets.components--form-autofire.form.sender-email.placeholder': 'Digite o email que vai aparecer na mensagem enviada.',
  'widgets.components--form-autofire.form.sender-email.validation.invalid-email-format': 'Esse email não existe',
  'widgets.components--form-autofire.form.email-subject.label': 'Assunto do email',
  'widgets.components--form-autofire.form.email-subject.placeholder': 'Digite o assunto que vai aparecer na mensagem enviada.',
  'widgets.components--form-autofire.form.email-text.label': 'Email de agradecimento',
  'widgets.components--form-autofire.form.email-text.placeholder': 'Exemplo: Obrigado por apostar na força da ação coletiva em rede. Sua participação é muito importante e, agora, precisamos da sua ajuda para que mais gente colabore com este BONDE. Compartilhe nas suas redes clicando em um dos links aqui embaixo. Um abraço.',

  // component widget form finish message
  // filepath: /client/mobilizations/widgets/components/form-finish-message/index.js
  // routepath:
  //   - /mobilizations/:mobilization_id/widgets/:widget_id/donation/finish
  //   - /mobilizations/:mobilization_id/widgets/:widget_id/form/finish
  //   - /mobilizations/:mobilization_id/widgets/:widget_id/pressure/finish
  'widgets.components--form-finish-message.success-message': 'Salvamos seu formulário!',
  'widgets.components--form-finish-message.type.label': 'Tipo de mensagem',
  'widgets.components--form-finish-message.type.radio.share': 'Compartilhar',
  'widgets.components--form-finish-message.type.radio.custom': 'Customizar',
  'widgets.components--form-finish-message.type.validation.required': 'Você não escolheu nenhum tipo de mensagem',
  'widgets.components--form-finish-message.share.whatsapp-text.label': 'Texto do WhatsApp',
  'widgets.components--form-finish-message.share.whatsapp-text.placeholder': 'Faça um texto curto e impactante, que chame a galera pra subir no seu BONDE. Você poderá alterar este texto depois.',
  'widgets.components--form-finish-message.preview.label': 'Preview',
  'widgets.components--form-finish-message.custom.message.default': 'Clique aqui para editar...',

  // component share tell-a-friend
  // filepath: /client/components/share/tell-a-friend.js
  // routepath:
  //   - /mobilizations/:mobilization_id/widgets/:widget_id/donation/finish
  //   - /mobilizations/:mobilization_id/widgets/:widget_id/form/finish
  //   - /mobilizations/:mobilization_id/widgets/:widget_id/pressure/finish
  //   - (public) /
  'share.components--tell-a-friend.text': 'Agora, compartilhe com seus amigos!',

  // component share facebook-share-button
  // filepath: /client/components/share/facebook-share-button.js
  // routepath:
  //   - /mobilizations/:mobilization_id/widgets/:widget_id/donation/finish
  //   - /mobilizations/:mobilization_id/widgets/:widget_id/form/finish
  //   - /mobilizations/:mobilization_id/widgets/:widget_id/pressure/finish
  //   - (public) /
  'share.components--facebook-share-button.text': 'Compartilhar no Facebook',

  // component share twitter-share-button
  // filepath: /client/components/share/twitter-share-button.js
  // routepath:
  //   - /mobilizations/:mobilization_id/widgets/:widget_id/donation/finish
  //   - /mobilizations/:mobilization_id/widgets/:widget_id/form/finish
  //   - /mobilizations/:mobilization_id/widgets/:widget_id/pressure/finish
  //   - (public) /
  'share.components--twitter-share-button.text': 'Compartilhar no Twitter',

  // component share whatsapp-share-button
  // filepath: /client/components/share/whatsapp-share-button.js
  // routepath:
  //   - /mobilizations/:mobilization_id/widgets/:widget_id/donation/finish
  //   - /mobilizations/:mobilization_id/widgets/:widget_id/form/finish
  //   - /mobilizations/:mobilization_id/widgets/:widget_id/pressure/finish
  //   - (public) /
  'share.components--whatsapp-share-button.text': 'Compartilhar no WhatsApp',

  // page donation widget finish
  // filepath: /routes/admin/authenticated/sidebar/widgets-donation-settings/finish/page.js
  // routepath: /mobilizations/:mobilization_id/widgets/:widget_id/donation/finish
  'page--donation-widget-finish.form.success-message': 'Salvamos seu formulário de pós-doação!',

  // component donation widget tell-a-friend
  // filepath: /client/mobilizations/widgets/__plugins__/donation/components/donation-tell-a-friend.js
  // routepath:
  //   - /mobilizations/:mobilization_id/widgets/:widget_id/donation/finish
  //   - (public) /
  'donation.components--tell-a-friend.message': 'Oba, doação registrada! Sua doação é via boleto? Dá uma olhada no seu email.',

  // config mobrender widgets
  // filepath: /client/mobrender/widgets/config.js
  // routepath: /mobilizations/:mobilization_id/edit
  'widgets.config--content.label': 'Texto',
  'widgets.config--content.default': 'Clique aqui para editar...',
  'widgets.config--form.label': 'Formulário',
  'widgets.config--form.default': 'Obrigado por apostar na força da ação coletiva em rede. Sua participação é muito importante e, agora, precisamos da sua ajuda para que mais gente colabore com este BONDE. Compartilhe nas suas redes clicando em um dos links aqui embaixo.Um abraço',
  'widgets.config--pressure.label': 'Pressão',
  'widgets.config--pressure.default.title': 'Envie um email para quem pode tomar essa decisão',
  'widgets.config--pressure.default.button-text': 'Enviar email',
  'widgets.config--donation.label': 'Doação',

  // component donation widget
  // filepath: /client/mobilizations/widgets/__plugins__/donation/components/__donation__/index.js
  // routepath:
  //   - /mobilizations/:mobilization_id/edit
  //   - (public) /
  'widgets.components--donation.default.button-text': 'Doar agora',
  'widgets.components--donation.default.title-text': 'Clique para configurar seu bloco de doação',
  'widgets.components--donation.period-label-options.month': 'mês',
  'widgets.components--donation.period-label-options.halfyear': 'semestre',
  'widgets.components--donation.period-label-options.year': 'ano',
  'widgets.components--donation.users-choice.recurring': 'Apoiar todo {periodLabelCurrent}',
  'widgets.components--donation.users-choice.unique': 'Doação única',

  // component form widget settings menu
  // filepath: /client/mobilizations/widgets/__plugins__/form/components/settings-menu.js
  // routepath:
  //   - /mobilizations/:mobilization_id/widgets/:widget_id/form
  //   - /mobilizations/:mobilization_id/widgets/:widget_id/form/autofire
  //   - /mobilizations/:mobilization_id/widgets/:widget_id/form/export
  //   - /mobilizations/:mobilization_id/widgets/:widget_id/form/fields
  //   - /mobilizations/:mobilization_id/widgets/:widget_id/form/finish
  'form-widget.components--settings-menu.title': 'Deixe o formulário da sua ação do seu jeito',
  'form-widget.components--settings-menu.items.fields': 'Campos do formulário',
  'form-widget.components--settings-menu.items.adjusts': 'Ajustes',
  'form-widget.components--settings-menu.items.autofire': 'Mensagem de agradecimento',
  'form-widget.components--settings-menu.items.report': 'Relatório',
  'form-widget.components--settings-menu.items.post-action': 'Pós-inscrição',

  // page form widget
  // filepath: /routes/admin/authenticated/sidebar/widgets-form-settings/form/page.js
  // routepath: /mobilizations/:mobilization_id/widgets/:widget_id/form
  'page--form-widget.form.success-message': 'Pronto! Configuramos o seu formulário!',
  'page--form-widget.form.widget-title.label': 'Título do formulário',
  'page--form-widget.form.widget-title.placeholder': 'Exemplo: Preencha o formulário abaixo para assinar a petição.',
  'page--form-widget.form.button-text.label': 'Botão',
  'page--form-widget.form.button-text.placeholder': 'Digite o texto do botão de confirmação do formulário.',
  'page--form-widget.form.counter-text.label': 'Contador',
  'page--form-widget.form.counter-text.placeholder': 'Digite o texto que ficará ao lado do número de pessoas que agiram.',

  // component data export
  // filepath: /client/mobilizations/widgets/components/data-export.js
  // routepath: /mobilizations/:mobilization_id/widgets/:widget_id/form/export
  'widgets.components--data-export.formated-export-at': '{date} às {time}',
  'widgets.components--data-export.loading.message': 'Segura firme, estamos quase lá...',
  'widgets.components--data-export.exported.message': 'Última exportação: {formatedExportAt}.',
  'widgets.components--data-export.export.label': 'Exportar',
  'widgets.components--data-export.export.helper-text': 'Clique no botão aqui embaixo para baixar o relatório completo do formulário em formato excel.',
  'widgets.components--data-export.export.button': 'Clique para baixar a planilha completa.',

  // action async widget data export
  // filepath: /client/mobrender/redux/action-creators/async-widget-data-export.js
  // routepath: /mobilizations/:mobilization_id/widgets/:widget_id/form/export
  'action--async-widget-data-export.no-data': 'Ah,não! Não encontramos nenhum dado para ser exportado',

  // page form widget fields
  // filepath: /routes/admin/authenticated/sidebar/widgets-form-settings/fields/page.js
  // routepath: /mobilizations/:mobilization_id/widgets/:widget_id/form/fields
  'page--form-widget-fields.add-button': 'Adicionar um campo',
  'page--form-widget-fields.helper-text.still-empty': 'Seu formulário ainda não possui nenhum campo. Clique aqui para começar a adicionar campos.',
  'page--form-widget-fields.helper-text.manage-fields': 'Adicione, remova, edite e ordene os campos do formulário como quiser',

  // component form widget
  // filepath: /client/mobilizations/widgets/__plugins__/form/components/__form__.js
  // routepath:
  //   - /mobilizations/:mobilization_id/edit
  //   - (public) /
  'form-widget.components--form.default.title-text': 'Clique para configurar seu formulário...',
  'form-widget.components--form.default.button-text': 'Enviar',
  'form-widget.components--form.default.counter-suffix': 'assinaturas',

  // component form widget input
  // filepath: /client/mobilizations/widgets/__plugins__/form/components/input.js
  // routepath: /mobilizations/:mobilization_id/widgets/:widget_id/form/fields
  'form-widget.components--input.click-to-edit': 'Clique para editar',
  'form-widget.components--input.field-dropdown.options.default': 'Selecione...',
  'form-widget.components--input.field-greetings.title': 'Mensagem de sucesso alterada para:',

  // component form widget input form
  // filepath: /client/mobilizations/widgets/__plugins__/form/components/input-form.js
  // routepath: /mobilizations/:mobilization_id/widgets/:widget_id/form/fields
  'form-widget.components--input-form.handle-remove.confirm': 'Tem certeza que quer remover este campo?',
  'form-widget.components--input-form.handle-overlay-click.confirm': 'Opa! Se você sair sem salvar, vai perder as alterações. Quer sair mesmo assim?',
  'form-widget.components--input-form.field-title.label': 'Título do campo',
  'form-widget.components--input-form.field-title.placeholder': 'Exemplo: Email',
  'form-widget.components--input-form.field-helper-text.label': 'Texto de ajuda',
  'form-widget.components--input-form.field-helper-text.placeholder': 'Exemplo: Digite aqui o seu email',
  'form-widget.components--input-form.field-type.label': 'Tipo de campo',
  'form-widget.components--input-form.field-type.options.text': 'Texto',
  'form-widget.components--input-form.field-type.options.email': 'Email',
  'form-widget.components--input-form.field-type.options.number': 'Número',
  'form-widget.components--input-form.field-type.options.dropdown': 'Dropdown &#9733;',
  'form-widget.components--input-form.field-type.options.greetings': 'Saudação &#9733;',
  'form-widget.components--input-form.field-required.label': 'Obrigatório',
  'form-widget.components--input-form.field-required.radio.yes.label': 'Sim',
  'form-widget.components--input-form.field-required.radio.no.label': 'Não',
  'form-widget.components--input-form.button-move-up': 'Mover para cima',
  'form-widget.components--input-form.button-move-down': 'Mover para baixo',
  'form-widget.components--input-form.button-remove': 'Remover',
  'form-widget.components--input-form.button-cancel': 'Cancelar',
  'form-widget.components--input-form.button-save.saving': 'Só mais um pouco...',
  'form-widget.components--input-form.button-save.default': 'Tudo certo!',

  // component mobrender widget overlay
  // filepath: /client/mobrender/components/widget-overlay.js
  // routepath: /mobilizations/:mobilization_id/edit
  'mobrender.components--widget-overlay.button.edit.title': 'Editar',
  'mobrender.components--widget-overlay.button.remove.title': 'Remover',

  // page form widget finish
  // filepath: /routes/admin/authenticated/sidebar/widgets-form-settings/finish/page.js
  // routepath: /mobilizations/:mobilization_id/widgets/:widget_id/form/finish
  'page--form-widget-finish.success-message': 'Pronto! Já salvamos seu formulário de pós-inscrição!',

  // component form widget tell a friend
  // filepath: /client/mobilizations/widgets/__plugins__/form/components/form-tell-a-friend.js
  // routepath:
  //   - /mobilizations/:mobilization_id/widgets/:widget_id/form/finish
  //   - (public) /
  'form-widget.components--tell-a-friend.message': 'Seu formulário foi enviado!',

  // component pressure widget settings menu
  // filepath: /client/mobilizations/widgets/__plugins__/pressure/components/settings-menu.js
  // routepath:
  //   - /mobilizations/:mobilization_id/widgets/:widget_id/pressure
  //   - /mobilizations/:mobilization_id/widgets/:widget_id/pressure/autofire
  //   - /mobilizations/:mobilization_id/widgets/:widget_id/pressure/email
  //   - /mobilizations/:mobilization_id/widgets/:widget_id/pressure/finish
  'pressure-widget.components--settings-menu.title': 'Configure seu formulário de pressão',
  'pressure-widget.components--settings-menu.items.form': 'Formulário',
  'pressure-widget.components--settings-menu.items.pressure-email': 'Email para alvo',
  'pressure-widget.components--settings-menu.items.autofire': 'Mensagem de agradecimento',
  'pressure-widget.components--settings-menu.items.post-action': 'Pós-pressão',

  // page pressure widget
  // filepath: /routes/admin/authenticated/sidebar/widgets-pressure-settings/pressure/page.js
  // routepath: /mobilizations/:mobilization_id/widgets/:widget_id/pressure
  'page--pressure-widget.success-message': 'Pronto! Configuramos seu formulário de pressão!',
  'page--pressure-widget.form.title-text.label': 'Título do formulário',
  'page--pressure-widget.form.title-text.placeholder': 'Envie um email para quem pode tomar essa decisão',
  'page--pressure-widget.form.button-text.label': 'Texto do botão',
  'page--pressure-widget.form.button-text.placeholder': 'Enviar email',
  'page--pressure-widget.form.main-color.label': 'Cor do formulário',
  'page--pressure-widget.form.show-counter.label': 'Mostrar contador de pressão',
  'page--pressure-widget.form.show-counter.radio.yes.label': 'Sim',
  'page--pressure-widget.form.show-counter.radio.no.label': 'Não',
  'page--pressure-widget.form.counter-text.label': 'Texto do contador',
  'page--pressure-widget.form.counter-text.placeholder': 'pressões feitas',
  'page--pressure-widget.form.show-city-field.label': 'Mostrar campo de cidade',
  'page--pressure-widget.form.show-city-field.radio.yes.label': 'Sim',
  'page--pressure-widget.form.show-city-field.radio.no.label': 'Não',

  // page pressure widget (connected)
  // filepath: /routes/admin/authenticated/sidebar/widgets-pressure-settings/pressure/page.connected.js
  // routepath: /mobilizations/:mobilization_id/widgets/:widget_id/pressure
  'page--pressure-widget.form.validation.title-text.required': 'Crie um título para o formulário',
  'page--pressure-widget.form.validation.button-text.required': 'Digite um texto para o botão',

  // component widgets input tag
  // filepath: /client/mobilizations/widgets/components/input-tag.js
  // routepath: /mobilizations/:mobilization_id/widgets/:widget_id/pressure/email
  'widgets.components--input-tag.helper-text.target-format': '1. Escreva o nome e email. Exemplo: Nome <email@provedor.com>',
  'widgets.components--input-tag.helper-text.enter-to-add': '2. Dê um <Enter> para adicionar mais alvos.',

  // page pressure widget email
  // filepath: /routes/admin/authenticated/sidebar/widgets-pressure-settings/email/page.js
  // routepath: /mobilizations/:mobilization_id/widgets/:widget_id/pressure/email
  'page--pressure-widget-email.success-message': 'Pronto! Já configuramos seu email para alvo',
  'page--pressure-widget-email.form.input-tag.label': 'Alvos',
  'page--pressure-widget-email.form.input-tag.validation.invalid-target-format': 'Esse formato de alvo não vale!Exemplo: Nome do alvo <alvo@provedor.com>',
  'page--pressure-widget-email.form.email-subject.label': 'Assunto do email',
  'page--pressure-widget-email.form.email-body.label': 'Corpo do email que será enviado',

  // page pressure widget email (connected)
  // filepath: /routes/admin/authenticated/sidebar/widgets-pressure-settings/email/page.connected.js
  // routepath: /mobilizations/:mobilization_id/widgets/:widget_id/pressure/email
  'page--pressure-widget-email.form.validation.required': 'Você precia preencher aqui',

  // page pressure widget finish
  // filepath: /routes/admin/authenticated/sidebar/widgets-pressure-settings/finish/page.js
  // routepath: /mobilizations/:mobilization_id/widgets/:widget_id/pressure/finish
  'page--pressure-widget-finish.success-message': 'Pronto! Seu formulário de pós-pressão está salvo.',

  // component pressure widget tell a friend
  // filepath: /client/mobilizations/widgets/__plugins__/pressure/components/pressure-tell-a-friend.js
  // routepath: /mobilizations/:mobilization_id/widgets/:widget_id/pressure/finish
  'pressure-widget--tell-a-friend.message': 'Parabéns! Você enviou sua pressão.',

  //
  // page activists management
  // filepath: {incoming-for-v0.6.x release}
  //
  // if the namenclature of the items was not matching when implementing
  // this feature, consider to make the necessary changes. after it,
  // remove this comment and place the respective filepath of the
  // translation keys.
  //
  // maybe, new intl key name convention can be implemented.
  //   e.g.
  //   - page      ~> `p--`
  //   - component ~> `c--`
  //
  'p--activists-management.header.title': 'Base de usuários',
  'p--activists-management.header.button.upload.text': 'Upload',
  'p--activists-management.header.button.download.text': 'Download',
  'p--activists-management.content.title': '{totalNumber} pessoas',
  'p--activists-management.content.button.tagging.text': 'Etiquetar',
  'p--activists-management.content.button.email.text': 'Email',
  'p--activists-management.content.form-tagging.tags.placeholder': 'Digite tags separadas por vírgula',
  'p--activists-management.content.form-tagging.button.text': 'Adicionar etiqueta',
  'p--activists-management.content.form-tagging.success.message': 'Você adicionou etiquetas a {taggedNumber} pessoas',
  'p--activists-management.content.form-tagging.success.undo': 'Desfazer',
  'p--activists-management.content.activist-spotlight.title': 'Perfil selecionado',
  'p--activists-management.content.activist-spotlight.email.label': 'Email',
  'p--activists-management.content.activist-spotlight.phone.label': 'Telefone',
  'p--activists-management.content.activist-spotlight.mobilizations.label': 'BONDES',
  'p--activists-management.content.activist-spotlight.tags.label': 'Etiquetas',
  'p--activists-management.content.activist-spotlight.form-tagging.button.text': 'Adicionar',

  // component activists management filterable list
  // filepath: {incoming-for-v0.6.x release}
  'activists-management.c--filterable-list.activist.placeholder': 'Quem você está procurando?',

  'activists-management.c--filterable-list.suggest.placeholder': 'Filtre por BONDES ou por formulários',
  'activists-management.c--filterable-list.suggest.operators.label': 'Operadores',
  'activists-management.c--filterable-list.suggest.operators.options.or.label': 'ou',
  'activists-management.c--filterable-list.suggest.operators.options.and.label': 'e',
  'activists-management.c--filterable-list.suggest.segment.donations.label': 'Doações',
  'activists-management.c--filterable-list.suggest.segment.pressures.label': 'Pressões',
  'activists-management.c--filterable-list.suggest.segment.gen-forms.label': 'Formulários genéricos',
  'activists-management.c--filterable-list.suggest.segment.other-tags.label': 'Outras etiquetas',

  'activists-management.c--filterable-list.period.options.today': 'Hoje',
  'activists-management.c--filterable-list.period.options.last-week': 'Na última semana',
  'activists-management.c--filterable-list.period.options.last-fortnight': 'Nos últimos 15 dias',
  'activists-management.c--filterable-list.period.options.last-month': 'Nos últimos 30 dias',
  'activists-management.c--filterable-list.period.options.last-quarter': 'Nos últimos 3 meses',
  'activists-management.c--filterable-list.period.options.last-year': 'No último ano',
  'activists-management.c--filterable-list.period.options.always': 'Sempre',
  'activists-management.c--filterable-list.period.options.custom-period': 'Customizar período...'
}
