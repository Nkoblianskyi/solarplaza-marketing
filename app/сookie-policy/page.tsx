import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

export default function CookiePolicyPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="mb-6">
        <Button asChild variant="ghost" className="pl-0">
          <Link href="/">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Volver al inicio
          </Link>
        </Button>
      </div>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tighter md:text-4xl mb-6">Política de Cookies</h1>

        <div className="prose max-w-none">
          <p className="text-muted-foreground mb-6">Última actualización: 15 de mayo de 2025</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. ¿Qué son las cookies?</h2>
            <p>
              Las cookies son pequeños archivos de texto que se almacenan en su dispositivo (ordenador, tableta o móvil)
              cuando visita un sitio web. Las cookies son ampliamente utilizadas para hacer que los sitios web
              funcionen, o funcionen de manera más eficiente, así como para proporcionar información a los propietarios
              del sitio.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Cómo utilizamos las cookies</h2>
            <p>
              Utilizamos cookies por varias razones que se detallan a continuación. Desafortunadamente, en la mayoría de
              los casos, no existen opciones estándar de la industria para deshabilitar las cookies sin deshabilitar por
              completo la funcionalidad y características que agregan a este sitio. Se recomienda que deje activadas
              todas las cookies si no está seguro de si las necesita o no, en caso de que se utilicen para proporcionar
              un servicio que usted utiliza.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Tipos de cookies que utilizamos</h2>

            <h3 className="text-xl font-semibold mt-6 mb-2">3.1 Cookies estrictamente necesarias</h3>
            <p>
              Estas cookies son necesarias para el funcionamiento del sitio web y no pueden ser desactivadas en nuestros
              sistemas. Generalmente solo se establecen en respuesta a acciones realizadas por usted que equivalen a una
              solicitud de servicios, como establecer sus preferencias de privacidad, iniciar sesión o completar
              formularios. Puede configurar su navegador para bloquear o alertar sobre estas cookies, pero algunas
              partes del sitio no funcionarán correctamente.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">3.2 Cookies de rendimiento</h3>
            <p>
              Estas cookies nos permiten contar las visitas y fuentes de tráfico para que podamos medir y mejorar el
              rendimiento de nuestro sitio. Nos ayudan a saber qué páginas son las más y menos populares y ver cómo los
              visitantes se mueven por el sitio. Toda la información que recopilan estas cookies es agregada y, por lo
              tanto, anónima. Si no permite estas cookies, no sabremos cuándo ha visitado nuestro sitio.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">3.3 Cookies de funcionalidad</h3>
            <p>
              Estas cookies permiten que el sitio proporcione una funcionalidad y personalización mejoradas. Pueden ser
              establecidas por nosotros o por proveedores externos cuyos servicios hemos agregado a nuestras páginas. Si
              no permite estas cookies, algunos o todos estos servicios pueden no funcionar correctamente.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">3.4 Cookies de publicidad</h3>
            <p>
              Estas cookies pueden ser establecidas a través de nuestro sitio por nuestros socios publicitarios. Pueden
              ser utilizadas por esas empresas para construir un perfil de sus intereses y mostrarle anuncios relevantes
              en otros sitios. No almacenan directamente información personal, sino que se basan en la identificación
              única de su navegador y dispositivo de Internet. Si no permite estas cookies, experimentará publicidad
              menos dirigida.
            </p>
          </section>


          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Cookies específicas utilizadas en este sitio</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300 mt-4">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">Nombre</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Proveedor</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Propósito</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Expiración</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">cookie-consent</td>
                    <td className="border border-gray-300 px-4 py-2">solarplazamarketing.com</td>
                    <td className="border border-gray-300 px-4 py-2">
                      Almacena su preferencia de consentimiento de cookies
                    </td>
                    <td className="border border-gray-300 px-4 py-2">1 año</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">_ga</td>
                    <td className="border border-gray-300 px-4 py-2">Google Analytics</td>
                    <td className="border border-gray-300 px-4 py-2">
                      Registra una ID única que se utiliza para generar datos estadísticos sobre cómo utiliza el
                      visitante el sitio web
                    </td>
                    <td className="border border-gray-300 px-4 py-2">2 años</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">_gid</td>
                    <td className="border border-gray-300 px-4 py-2">Google Analytics</td>
                    <td className="border border-gray-300 px-4 py-2">
                      Registra una ID única que se utiliza para generar datos estadísticos sobre cómo utiliza el
                      visitante el sitio web
                    </td>
                    <td className="border border-gray-300 px-4 py-2">24 horas</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">_gat</td>
                    <td className="border border-gray-300 px-4 py-2">Google Analytics</td>
                    <td className="border border-gray-300 px-4 py-2">
                      Se utiliza para limitar la velocidad de solicitud
                    </td>
                    <td className="border border-gray-300 px-4 py-2">1 minuto</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Cambios en nuestra política de cookies</h2>
            <p>
              Cualquier cambio que podamos hacer en nuestra política de cookies en el futuro se publicará en esta
              página. Verifique con frecuencia para ver si hay actualizaciones o cambios en nuestra política de cookies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Contacto</h2>
            <p>Si tiene alguna pregunta sobre nuestra política de cookies, contáctenos en:</p>
            <div className="mt-4">
              <p>
                <strong>SolarPlaza Marketing</strong>
              </p>
              <p>Paseo de la Castellana, 90</p>
              <p>28046 Madrid, Spain</p>
              <p>Email: info@solarplazamarketing.com</p>
              <p>Teléfono: +34 691 279 237</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
