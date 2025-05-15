import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

export default function PrivacyPolicyPage() {
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
                <h1 className="text-3xl font-bold tracking-tighter md:text-4xl mb-6">Política de Privacidad</h1>

                <div className="prose max-w-none">
                    <p className="text-muted-foreground mb-6">Última actualización: 15 de mayo de 2025</p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">1. Introducción</h2>
                        <p>
                            En SolarPlaza Marketing ("nosotros", "nuestro", "la empresa") respetamos su privacidad y nos comprometemos
                            a proteger sus datos personales. Esta política de privacidad le informará sobre cómo cuidamos sus datos
                            personales cuando visita nuestro sitio web y le informará sobre sus derechos de privacidad y cómo la ley
                            le protege.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">2. Datos que recopilamos</h2>
                        <p>
                            Podemos recopilar, usar, almacenar y transferir diferentes tipos de datos personales sobre usted, que
                            hemos agrupado de la siguiente manera:
                        </p>
                        <ul className="list-disc pl-6 mt-2 space-y-2">
                            <li>
                                <strong>Datos de identidad:</strong> incluye nombre, apellidos, nombre de usuario o identificador
                                similar.
                            </li>
                            <li>
                                <strong>Datos de contacto:</strong> incluye dirección de facturación, dirección de entrega, dirección de
                                correo electrónico y números de teléfono.
                            </li>
                            <li>
                                <strong>Datos técnicos:</strong> incluye dirección de protocolo de Internet (IP), datos de inicio de
                                sesión, tipo y versión del navegador, configuración de zona horaria y ubicación, tipos y versiones de
                                complementos del navegador, sistema operativo y plataforma, y otra tecnología en los dispositivos que
                                utiliza para acceder a este sitio web.
                            </li>
                            <li>
                                <strong>Datos de perfil:</strong> incluye su nombre de usuario y contraseña, compras o pedidos
                                realizados por usted, sus intereses, preferencias, comentarios y respuestas a encuestas.
                            </li>
                            <li>
                                <strong>Datos de uso:</strong> incluye información sobre cómo utiliza nuestro sitio web, productos y
                                servicios.
                            </li>
                            <li>
                                <strong>Datos de marketing y comunicaciones:</strong> incluye sus preferencias para recibir marketing de
                                nuestra parte y de terceros, y sus preferencias de comunicación.
                            </li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">3. Cómo utilizamos sus datos</h2>
                        <p>
                            Solo utilizaremos sus datos personales cuando la ley nos lo permita. Más comúnmente, utilizaremos sus
                            datos personales en las siguientes circunstancias:
                        </p>
                        <ul className="list-disc pl-6 mt-2 space-y-2">
                            <li>
                                Cuando necesitemos ejecutar el contrato que estamos a punto de celebrar o hemos celebrado con usted.
                            </li>
                            <li>
                                Cuando sea necesario para nuestros intereses legítimos (o los de un tercero) y sus intereses y derechos
                                fundamentales no anulen esos intereses.
                            </li>
                            <li>Cuando necesitemos cumplir con una obligación legal o regulatoria.</li>
                            <li>
                                Cuando nos haya dado su consentimiento para procesar sus datos personales para un propósito específico.
                            </li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">4. Compartir sus datos personales</h2>
                        <p>
                            Podemos compartir sus datos personales con las partes que se indican a continuación para los fines
                            establecidos en esta política de privacidad:
                        </p>
                        <ul className="list-disc pl-6 mt-2 space-y-2">
                            <li>Proveedores de servicios que proporcionan servicios de TI y administración de sistemas.</li>
                            <li>Asesores profesionales, incluidos abogados, banqueros, auditores y aseguradores.</li>
                            <li>Autoridades fiscales, reguladoras y otras autoridades.</li>
                            <li>
                                Terceros a quienes podemos elegir vender, transferir o fusionar partes de nuestro negocio o nuestros
                                activos.
                            </li>
                        </ul>
                        <p className="mt-4">
                            Exigimos a todos los terceros que respeten la seguridad de sus datos personales y los traten de acuerdo
                            con la ley. No permitimos que nuestros proveedores de servicios externos utilicen sus datos personales
                            para sus propios fines y solo les permitimos procesar sus datos personales para fines específicos y de
                            acuerdo con nuestras instrucciones.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">5. Seguridad de datos</h2>
                        <p>
                            Hemos implementado medidas de seguridad apropiadas para evitar que sus datos personales se pierdan,
                            utilicen o accedan de forma no autorizada, se modifiquen o divulguen accidentalmente. Además, limitamos el
                            acceso a sus datos personales a aquellos empleados, agentes, contratistas y otros terceros que tengan una
                            necesidad comercial de conocerlos. Solo procesarán sus datos personales según nuestras instrucciones y
                            están sujetos a un deber de confidencialidad.
                        </p>
                        <p className="mt-4">
                            Hemos implementado procedimientos para tratar cualquier sospecha de violación de datos personales y le
                            notificaremos a usted y a cualquier regulador aplicable de una violación cuando estemos legalmente
                            obligados a hacerlo.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">6. Sus derechos legales</h2>
                        <p>
                            Bajo ciertas circunstancias, usted tiene derechos bajo las leyes de protección de datos en relación con
                            sus datos personales, incluyendo el derecho a:
                        </p>
                        <ul className="list-disc pl-6 mt-2 space-y-2">
                            <li>Solicitar acceso a sus datos personales.</li>
                            <li>Solicitar la corrección de sus datos personales.</li>
                            <li>Solicitar la eliminación de sus datos personales.</li>
                            <li>Oponerse al procesamiento de sus datos personales.</li>
                            <li>Solicitar la restricción del procesamiento de sus datos personales.</li>
                            <li>Solicitar la transferencia de sus datos personales.</li>
                            <li>Retirar el consentimiento en cualquier momento.</li>
                        </ul>
                        <p className="mt-4">
                            Si desea ejercer cualquiera de los derechos establecidos anteriormente, contáctenos a través de
                            info@solarplazamarketing.com.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">7. Cambios a esta política de privacidad</h2>
                        <p>
                            Podemos actualizar nuestra política de privacidad de vez en cuando. Publicaremos cualquier cambio en esta
                            página y, si los cambios son significativos, le proporcionaremos un aviso más prominente o le enviaremos
                            una notificación directa.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">8. Contacto</h2>
                        <p>
                            Si tiene alguna pregunta sobre esta política de privacidad o nuestras prácticas de privacidad, contáctenos
                            en:
                        </p>
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
