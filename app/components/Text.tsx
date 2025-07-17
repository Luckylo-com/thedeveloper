
import CurvedLoop from "@/app/components/CurvedLoop"

export function Text() {
  return (
    <>
      <div className="flex relative flex-col py-6 bg-bluemiddle tracking-wider
    font-[family-name:var(--font-manrope-mono)] max-md768:py-3">
      <div className="flex items-center">
        <CurvedLoop
          marqueeText="Интерактивные прототипы приложений  ✦  База данных под ключ  ✦  Интерфейс по канонам UI / UX  ✦  Интеграция со сторонними сервисами  ✦  Тестирование и отладка приложений  ✦  Публикация приложения на платформе / web-сайте  ✦  Интерактивные прототипы приложений  ✦  База данных под ключ  ✦  Интерфейс по канонам UI / UX  ✦  Интеграция со сторонними сервисами  ✦  Тестирование и отладка приложений  ✦  Публикация приложения на платформе / web-сайте  ✦"
          speed={1}
          curveAmount={0}
          direction="right"
          interactive={true}
          className="flex text-2xl font-medium text-gray4 max-md768:text-3xl"
        />
        </div>
      </div>
    </>
  )
}
