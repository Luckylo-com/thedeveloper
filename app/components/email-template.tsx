
interface EmailTemplateProps {
  nameClient: string | null,
  phoneClient: string | null,
  emailClient: string | null,
  commentClient: string | null,
}

export function EmailTemplate({
  nameClient,
  phoneClient,
  emailClient,
  commentClient
}: EmailTemplateProps) {
  return (
    <>
    <div>
      <div>Заявка с сайта</div>
      <div className="flex flex-row">
          <span className="mr-[15px] text-[#04071C] font-semibold">Имя клиента:</span>
          <span className='text-[#04071C]'>{nameClient}</span>
        </div>
        <div className="flex flex-row">
          <span className="mr-[15px]">Телефон клиента:</span>
          <span>{phoneClient}</span>
        </div>
        <div className="flex flex-row">
          <span className="mr-[15px]">Email клиента:</span>
          <span>{emailClient}</span>
        </div>
        <div className="flex flex-row">
          <span className="mr-[15px]">Сообщение:</span>
          <span>{commentClient}</span>
        </div>
    </div>
    </>
  )
}
