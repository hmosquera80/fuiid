"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import {
  Heart,
  Users,
  Leaf,
  BookOpen,
  Phone,
  Mail,
  MapPin,
  Building2,
  Star,
  MessageCircle,
  Send,
  User,
  Calendar,
  Shield,
  ExternalLink,
} from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  const testimonials = [
    // 2017
    {
      id: 1,
      name: "Carmen Rodríguez",
      date: "2017-03-15",
      message:
        "Gracias a FUIID mi familia recibió apoyo alimentario cuando más lo necesitábamos. Su trabajo con la tercera edad es admirable.",
      admin: "Administrador FUIID",
      adminDate: "2017-03-16",
    },
    {
      id: 2,
      name: "José Luis Martínez",
      date: "2017-06-22",
      message:
        "Los talleres de nutrición para mi esposa embarazada fueron fundamentales. Nuestro bebé nació sano y fuerte.",
      admin: "Coordinadora de Salud",
      adminDate: "2017-06-23",
    },
    {
      id: 3,
      name: "Ana María Pérez",
      date: "2017-09-10",
      message:
        "El programa de adopción de mascotas me ayudó a encontrar a mi compañero fiel. Excelente trabajo con los animales.",
      admin: "Responsable Bienestar Animal",
      adminDate: "2017-09-11",
    },
    {
      id: 4,
      name: "Carlos Mendoza",
      date: "2017-11-05",
      message: "Como líder comunitario, el fortalecimiento que recibí de FUIID transformó nuestra organización social.",
      admin: "Director de Proyectos",
      adminDate: "2017-11-06",
    },
    {
      id: 5,
      name: "María Elena Vargas",
      date: "2017-12-18",
      message:
        "Los suplementos nutricionales para mis hijos marcaron la diferencia en su desarrollo. Infinitas gracias.",
      admin: "Administrador FUIID",
      adminDate: "2017-12-19",
    },

    // 2018
    {
      id: 6,
      name: "Roberto Silva",
      date: "2018-02-14",
      message: "El acompañamiento psicosocial que recibí mi madre de 80 años le devolvió la alegría de vivir.",
      admin: "Psicóloga del Programa",
      adminDate: "2018-02-15",
    },
    {
      id: 7,
      name: "Lucía Hernández",
      date: "2018-05-08",
      message: "Los talleres de lactancia materna fueron esenciales para mi primer embarazo. Personal muy capacitado.",
      admin: "Coordinadora de Salud",
      adminDate: "2018-05-09",
    },
    {
      id: 8,
      name: "Diego Ramírez",
      date: "2018-07-20",
      message: "Gracias a las capacitaciones sobre ciberacoso, pude proteger a mis hijos adolescentes en internet.",
      admin: "Especialista en Tecnología",
      adminDate: "2018-07-21",
    },
    {
      id: 9,
      name: "Patricia Gómez",
      date: "2018-10-12",
      message:
        "El programa de emprendimiento social me ayudó a crear mi propio negocio. Ahora soy independiente económicamente.",
      admin: "Director de Proyectos",
      adminDate: "2018-10-13",
    },
    {
      id: 10,
      name: "Fernando Castro",
      date: "2018-12-03",
      message:
        "La jornada de esterilización gratuita para mi perrita fue excelente. Servicio profesional y con mucho amor.",
      admin: "Veterinario Aliado",
      adminDate: "2018-12-04",
    },

    // 2019
    {
      id: 11,
      name: "Gloria Jiménez",
      date: "2019-01-25",
      message: "Como mujer cabeza de hogar, el apoyo integral que recibí cambió la vida de mi familia completamente.",
      admin: "Trabajadora Social",
      adminDate: "2019-01-26",
    },
    {
      id: 12,
      name: "Andrés Morales",
      date: "2019-04-17",
      message: "Los talleres de formación artística para jóvenes son increíbles. Mi hijo descubrió su talento musical.",
      admin: "Coordinador Cultural",
      adminDate: "2019-04-18",
    },
    {
      id: 13,
      name: "Sandra López",
      date: "2019-07-09",
      message: "El programa de salud oral preventiva en el colegio de mis hijos fue muy completo y educativo.",
      admin: "Odontóloga del Programa",
      adminDate: "2019-07-10",
    },
    {
      id: 14,
      name: "Miguel Ángel Torres",
      date: "2019-09-30",
      message: "La consultoría en políticas públicas que brindaron a nuestra alcaldía fue de altísima calidad.",
      admin: "Director de Proyectos",
      adminDate: "2019-10-01",
    },
    {
      id: 15,
      name: "Esperanza Ruiz",
      date: "2019-11-22",
      message: "El comedor comunitario para adultos mayores es un espacio de amor y dignidad. Bendiciones para FUIID.",
      admin: "Administrador FUIID",
      adminDate: "2019-11-23",
    },

    // 2020
    {
      id: 16,
      name: "Jaime Delgado",
      date: "2020-03-08",
      message: "Durante la pandemia, el apoyo alimentario de FUIID fue vital para nuestra supervivencia familiar.",
      admin: "Coordinadora de Emergencias",
      adminDate: "2020-03-09",
    },
    {
      id: 17,
      name: "Beatriz Navarro",
      date: "2020-06-15",
      message: "Los protocolos de autocuidado digital que enseñaron protegieron a toda mi familia del ciberacoso.",
      admin: "Especialista en Tecnología",
      adminDate: "2020-06-16",
    },
    {
      id: 18,
      name: "Raúl Medina",
      date: "2020-08-27",
      message:
        "El proyecto de infraestructura social en nuestro barrio mejoró la calidad de vida de todos los vecinos.",
      admin: "Ingeniero de Proyectos",
      adminDate: "2020-08-28",
    },
    {
      id: 19,
      name: "Claudia Restrepo",
      date: "2020-10-14",
      message:
        "Como docente, las capacitaciones sobre uso responsable de tecnología transformaron mi práctica educativa.",
      admin: "Coordinador Educativo",
      adminDate: "2020-10-15",
    },
    {
      id: 20,
      name: "Álvaro Quintero",
      date: "2020-12-05",
      message: "La adopción responsable de mi gato rescatado fue un proceso hermoso y muy bien acompañado.",
      admin: "Responsable Bienestar Animal",
      adminDate: "2020-12-06",
    },

    // 2021
    {
      id: 21,
      name: "Mónica Herrera",
      date: "2021-02-18",
      message: "El programa de hábitos de vida activa para mi papá de 75 años le devolvió la vitalidad y la alegría.",
      admin: "Fisioterapeuta del Programa",
      adminDate: "2021-02-19",
    },
    {
      id: 22,
      name: "Gustavo Parra",
      date: "2021-05-12",
      message: "Los talleres de buenos hábitos alimenticios durante el embarazo de mi esposa fueron fundamentales.",
      admin: "Nutricionista del Programa",
      adminDate: "2021-05-13",
    },
    {
      id: 23,
      name: "Yolanda Sánchez",
      date: "2021-07-24",
      message:
        "El fortalecimiento organizacional que recibió nuestra fundación nos permitió crecer y ser más eficientes.",
      admin: "Consultor Organizacional",
      adminDate: "2021-07-25",
    },
    {
      id: 24,
      name: "Hernán Aguilar",
      date: "2021-09-16",
      message: "La educación en nutrición saludable para niños cambió los hábitos alimentarios de toda mi familia.",
      admin: "Coordinadora de Salud",
      adminDate: "2021-09-17",
    },
    {
      id: 25,
      name: "Liliana Vega",
      date: "2021-11-08",
      message:
        "Como veterinaria, trabajar en alianza con FUIID en las jornadas de esterilización ha sido muy gratificante.",
      admin: "Director de Alianzas",
      adminDate: "2021-11-09",
    },

    // 2022
    {
      id: 26,
      name: "Óscar Ramírez",
      date: "2022-01-20",
      message:
        "El acompañamiento a nuestra organización social nos fortaleció como líderes comunitarios comprometidos.",
      admin: "Trabajador Social",
      adminDate: "2022-01-21",
    },
    {
      id: 27,
      name: "Teresa Moreno",
      date: "2022-04-07",
      message: "Los paquetes alimentarios balanceados para mi mamá adulta mayor son de excelente calidad nutricional.",
      admin: "Nutricionista del Programa",
      adminDate: "2022-04-08",
    },
    {
      id: 28,
      name: "Fabián Cortés",
      date: "2022-06-19",
      message:
        "Las estrategias de prevención del ciberacoso que aprendimos protegieron a nuestros estudiantes efectivamente.",
      admin: "Especialista en Tecnología",
      adminDate: "2022-06-20",
    },
    {
      id: 29,
      name: "Margarita Ospina",
      date: "2022-08-11",
      message: "El programa de inclusión social para jóvenes le dio oportunidades reales a mi hijo con discapacidad.",
      admin: "Coordinador de Inclusión",
      adminDate: "2022-08-12",
    },
    {
      id: 30,
      name: "Rodrigo Mejía",
      date: "2022-10-23",
      message: "La consultoría en desarrollo territorial que recibió nuestro municipio generó proyectos muy exitosos.",
      admin: "Director de Proyectos",
      adminDate: "2022-10-24",
    },

    // 2023
    {
      id: 31,
      name: "Amparo Díaz",
      date: "2023-02-14",
      message: "Las jornadas de acompañamiento recreativo para adultos mayores llenaron de alegría a mi abuela.",
      admin: "Recreacionista del Programa",
      adminDate: "2023-02-15",
    },
    {
      id: 32,
      name: "Esteban Vargas",
      date: "2023-05-03",
      message: "El microemprendimiento que desarrollé con el apoyo de FUIID ahora da trabajo a 5 familias más.",
      admin: "Coordinador de Emprendimiento",
      adminDate: "2023-05-04",
    },
    {
      id: 33,
      name: "Rocío Peña",
      date: "2023-07-15",
      message:
        "Los suplementos nutricionales que recibieron mis nietos mejoraron significativamente su rendimiento escolar.",
      admin: "Coordinadora de Salud",
      adminDate: "2023-07-16",
    },
    {
      id: 34,
      name: "Mauricio León",
      date: "2023-09-06",
      message:
        "Como alcalde, la alianza con FUIID nos permitió ejecutar proyectos sociales de gran impacto comunitario.",
      admin: "Director de Alianzas",
      adminDate: "2023-09-07",
    },
    {
      id: 35,
      name: "Consuelo Ramos",
      date: "2023-11-18",
      message:
        "El programa de tenencia responsable de mascotas educó a toda nuestra comunidad sobre el cuidado animal.",
      admin: "Responsable Bienestar Animal",
      adminDate: "2023-11-19",
    },

    // 2024
    {
      id: 36,
      name: "Iván Salazar",
      date: "2024-01-12",
      message:
        "Las capacitaciones en lactancia materna que recibió mi hija fueron clave para el bienestar de mi nieto.",
      admin: "Coordinadora de Salud",
      adminDate: "2024-01-13",
    },
    {
      id: 37,
      name: "Nelly Cardona",
      date: "2024-03-25",
      message:
        "El comedor escolar que administra FUIID garantiza alimentación nutritiva y balanceada para nuestros niños.",
      admin: "Administrador FUIID",
      adminDate: "2024-03-26",
    },
    {
      id: 38,
      name: "Germán Rojas",
      date: "2024-06-08",
      message: "Los talleres de formación en diferentes áreas ampliaron las oportunidades laborales de los jóvenes.",
      admin: "Coordinador Educativo",
      adminDate: "2024-06-09",
    },
    {
      id: 39,
      name: "Pilar Montoya",
      date: "2024-08-20",
      message:
        "La atención veterinaria gratuita para animales de la calle es un acto de amor y responsabilidad social.",
      admin: "Veterinario Aliado",
      adminDate: "2024-08-21",
    },
    {
      id: 40,
      name: "Arturo Benítez",
      date: "2024-10-02",
      message:
        "El fortalecimiento de nuestra veeduría ciudadana nos convirtió en verdaderos guardianes del bien público.",
      admin: "Director de Proyectos",
      adminDate: "2024-10-03",
    },

    // 2025
    {
      id: 41,
      name: "Esperanza Cárdenas",
      date: "2025-01-15",
      message: "Los programas de envejecimiento saludable le dieron una nueva perspectiva de vida a mi esposo.",
      admin: "Gerontólogo del Programa",
      adminDate: "2025-01-16",
    },
    {
      id: 42,
      name: "Leonardo Garzón",
      date: "2025-03-08",
      message: "La implementación de protocolos de autocuidado digital protegió a nuestra institución educativa.",
      admin: "Especialista en Tecnología",
      adminDate: "2025-03-09",
    },
    {
      id: 43,
      name: "Soledad Herrera",
      date: "2025-05-20",
      message: "Como madre soltera, el apoyo integral de FUIID me permitió salir adelante con mis tres hijos.",
      admin: "Trabajadora Social",
      adminDate: "2025-05-21",
    },
    {
      id: 44,
      name: "Camilo Escobar",
      date: "2025-07-12",
      message:
        "Las campañas de salud oral en colegios mejoraron significativamente la salud dental de los estudiantes.",
      admin: "Odontólogo del Programa",
      adminDate: "2025-07-13",
    },
    {
      id: 45,
      name: "Luz Marina Torres",
      date: "2025-08-25",
      message:
        "El programa de adopción responsable me conectó con mi mascota ideal. Proceso muy profesional y amoroso.",
      admin: "Responsable Bienestar Animal",
      adminDate: "2025-08-26",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image src="/images/fuiid-logo.png" alt="FUIID Logo" width={50} height={50} className="rounded-lg" />
              <div>
                <h1 className="font-serif font-bold text-xl text-primary">FUIID</h1>
                <p className="text-xs text-muted-foreground">Fundación para el Desarrollo</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#inicio" className="text-foreground hover:text-primary transition-colors">
                Inicio
              </a>
              <a href="#servicios" className="text-foreground hover:text-primary transition-colors">
                Servicios
              </a>
              <a href="#proyectos" className="text-foreground hover:text-primary transition-colors">
                Proyectos
              </a>
              <a href="#testimonios" className="text-foreground hover:text-primary transition-colors">
                Testimonios
              </a>
              <a href="#nosotros" className="text-foreground hover:text-primary transition-colors">
                Nosotros
              </a>
              <a href="#legal" className="text-foreground hover:text-primary transition-colors">
                Información Legal
              </a>
              <a href="#contacto" className="text-foreground hover:text-primary transition-colors">
                Contacto
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-8">
            <Image
              src="/images/fuiid-logo.png"
              alt="FUIID Logo"
              width={120}
              height={120}
              className="rounded-2xl shadow-lg"
            />
          </div>
          <h1 className="font-serif font-bold text-4xl md:text-6xl text-balance mb-6">
            Transformando Comunidades a través de la
            <span className="text-primary"> Investigación</span> y el
            <span className="text-secondary"> Desarrollo</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 text-pretty">
            Somos una entidad sin ánimo de lucro dedicada al desarrollo integral de personas y comunidades mediante
            proyectos de investigación, innovación y transformación social sostenible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Conoce Nuestros Proyectos
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
            >
              Únete Como Voluntario
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="nosotros" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4">Nuestra Misión</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
              Nuestra misión es impulsar el desarrollo integral de jóvenes, niños, adolescentes y líderes sociales,
              fortaleciendo sus capacidades y mejorando la calidad de vida de sus comunidades. A través de la
              investigación, la educación y la ejecución de proyectos, promovemos la protección del medio ambiente, el
              bienestar de los animales y la convivencia armoniosa entre personas, animales y entorno natural.
              Trabajamos en colaboración con instituciones públicas y privadas para generar impacto positivo y
              sostenible.
            </p>
          </div>

          {/* Vision Section */}
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4">Nuestra Visión</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto text-pretty">
              "En 2030 seremos una organización confiable y sólida, reconocida por generar un impacto real en las
              comunidades mediante proyectos de investigación, innovación y desarrollo sostenible, que fortalezcan la
              confianza ciudadana, consoliden el tejido social y mejoren la calidad de vida."
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <Heart className="w-8 h-8 mx-auto mb-2" style={{ color: "oklch(0.55 0.2 15)" }} />
                <CardTitle className="text-sm">Solidaridad</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">
                  Trabajamos con empatía y compromiso hacia quienes más lo necesitan.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-sm">Participación</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">
                  Promovemos la inclusión activa de la comunidad en cada proceso.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <BookOpen className="w-8 h-8 mx-auto mb-2" style={{ color: "oklch(0.65 0.15 60)" }} />
                <CardTitle className="text-sm">Innovación</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">
                  Buscamos soluciones creativas y sostenibles para el desarrollo.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Building2 className="w-8 h-8 text-secondary mx-auto mb-2" />
                <CardTitle className="text-sm">Transparencia</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">Actuamos con ética, claridad y responsabilidad.</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Leaf className="w-8 h-8 mx-auto mb-2" style={{ color: "oklch(0.35 0.1 20)" }} />
                <CardTitle className="text-sm">Impacto Social</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground">
                  Nuestras acciones se orientan a resultados que mejoren la vida de las personas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4">Nuestros Servicios</h2>
            <p className="text-lg text-muted-foreground">Impulsamos el desarrollo a través de servicios integrales</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Users className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Fortalecimiento Comunitario y Ciudadano</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Formación en liderazgo y participación ciudadana</li>
                  <li>• Acompañamiento a organizaciones sociales</li>
                  <li>• Procesos de control social y veeduría ciudadana</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <MapPin className="w-10 h-10 text-secondary mb-2" />
                <CardTitle>Proyectos de Desarrollo Territorial</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Planes de desarrollo sostenible</li>
                  <li>• Proyectos de infraestructura social y cultural</li>
                  <li>• Estrategias de dinamización económica comunitaria</li>
                  <li>• Apoyo a microemprendimientos locales</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <BookOpen className="w-10 h-10 mb-2" style={{ color: "oklch(0.65 0.15 60)" }} />
                <CardTitle>Educación y Cultura</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Talleres de formación en diferentes áreas</li>
                  <li>• Talleres de formación artística</li>
                  <li>• Programas de inclusión social</li>
                  <li>• Actividades de fomento cultural</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Building2 className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Investigación e Innovación Social</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Estudios de impacto social y comunitario</li>
                  <li>• Consultorías en políticas públicas</li>
                  <li>• Proyectos de innovación para el desarrollo</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Heart className="w-10 h-10 mb-2" style={{ color: "oklch(0.55 0.2 15)" }} />
                <CardTitle>Bienestar Animal y Tenencia Responsable</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Programas de cuidado y adopción de mascotas</li>
                  <li>• Campañas de esterilización y vacunación</li>
                  <li>• Educación sobre tenencia responsable</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Leaf className="w-10 h-10 mb-2" style={{ color: "oklch(0.35 0.1 20)" }} />
                <CardTitle>Medio Ambiente y Sostenibilidad</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Proyectos de conservación ambiental</li>
                  <li>• Desarrollo de ambientes urbanos saludables</li>
                  <li>• Promoción del desarrollo sostenible</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4">Proyectos Ejecutados</h2>
            <p className="text-lg text-muted-foreground">Impacto real en nuestras comunidades</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Heart className="w-8 h-8" style={{ color: "oklch(0.55 0.2 15)" }} />
                  <CardTitle className="text-xl">Intervención con Personas de la Tercera Edad</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Entrega de paquetes alimentarios balanceados</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Jornadas de acompañamiento psicosocial y recreativo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Promoción de hábitos de vida activa y envejecimiento saludable</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-secondary">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Users className="w-8 h-8 text-secondary" />
                  <CardTitle className="text-xl">Mujeres Embarazadas</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Talleres de buenos hábitos alimenticios durante la gestación</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Capacitaciones en lactancia materna y nutrición infantil</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Jornadas de salud oral preventiva para garantizar bienestar integral madre–hijo</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4" style={{ borderLeftColor: "oklch(0.65 0.15 60)" }}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <BookOpen className="w-8 h-8" style={{ color: "oklch(0.65 0.15 60)" }} />
                  <CardTitle className="text-xl">Niños y Niñas</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span
                      className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                      style={{ backgroundColor: "oklch(0.65 0.15 60)" }}
                    ></span>
                    <span>Programas de educación en nutrición saludable</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span
                      className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                      style={{ backgroundColor: "oklch(0.65 0.15 60)" }}
                    ></span>
                    <span>Campañas de salud oral en instituciones educativas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span
                      className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                      style={{ backgroundColor: "oklch(0.65 0.15 60)" }}
                    ></span>
                    <span>Entrega de suplementos nutricionales en comunidades vulnerables</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4" style={{ borderLeftColor: "oklch(0.35 0.1 20)" }}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Building2 className="w-8 h-8" style={{ color: "oklch(0.35 0.1 20)" }} />
                  <CardTitle className="text-xl">Prevención del Ciberacoso</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span
                      className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                      style={{ backgroundColor: "oklch(0.35 0.1 20)" }}
                    ></span>
                    <span>Capacitaciones a jóvenes, familias y docentes en uso responsable de la tecnología</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span
                      className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                      style={{ backgroundColor: "oklch(0.35 0.1 20)" }}
                    ></span>
                    <span>Estrategias de prevención, detección y atención de casos de ciberacoso</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span
                      className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                      style={{ backgroundColor: "oklch(0.35 0.1 20)" }}
                    ></span>
                    <span>Implementación de protocolos de autocuidado digital</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Heart className="w-8 h-8 text-accent" />
                  <CardTitle className="text-xl">Bienestar y Protección Animal</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                    <span>Campañas de adopción responsable de animales de la calle</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                    <span>Programas de bienestar y cuidado para animales en situación de vulnerabilidad</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                    <span>Jornadas de esterilización y atención veterinaria gratuita</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Legal Information Section - DIAN Requirements */}
      <section id="legal" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4">Información Legal</h2>
            <p className="text-lg text-muted-foreground">Transparencia y cumplimiento normativo</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="bg-muted/30">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Shield className="h-5 w-5 text-primary" />
                  Documentos Oficiales
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <button
                    onClick={() => window.open("/documentos/certificados", "_blank")}
                    className="w-full flex items-center justify-between p-3 text-left hover:bg-muted/50 rounded-lg transition-colors group"
                  >
                    <span className="text-sm font-medium">Certificado de Existencia y Representación Legal</span>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </button>

                  <button
                    onClick={() => window.open("/documentos/estatutos", "_blank")}
                    className="w-full flex items-center justify-between p-3 text-left hover:bg-muted/50 rounded-lg transition-colors group"
                  >
                    <span className="text-sm font-medium">Estatutos de la Fundación</span>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </button>

                  <button
                    onClick={() => window.open("/documentos/estados-financieros", "_blank")}
                    className="w-full flex items-center justify-between p-3 text-left hover:bg-muted/50 rounded-lg transition-colors group"
                  >
                    <span className="text-sm font-medium">Estados Financieros</span>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </button>

                  <button
                    onClick={() => window.open("/documentos/informes-gestion", "_blank")}
                    className="w-full flex items-center justify-between p-3 text-left hover:bg-muted/50 rounded-lg transition-colors group"
                  >
                    <span className="text-sm font-medium">Informes de Gestión</span>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4">Testimonios de Nuestra Labor</h2>
            <p className="text-lg text-muted-foreground">
              Voces reales de quienes han sido parte de nuestro impacto social
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {testimonials.slice(0, 12).map((testimonial) => (
              <Card key={testimonial.id} className="relative">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-primary" />
                      <CardTitle className="text-sm">{testimonial.name}</CardTitle>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{testimonial.date}</span>
                    </div>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 text-pretty leading-relaxed">
                    "{testimonial.message}"
                  </p>
                  <div className="border-t pt-3">
                    <div className="bg-primary/5 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <MessageCircle className="w-3 h-3 text-primary" />
                        <span className="text-xs font-medium text-primary">Respuesta del Administrador</span>
                      </div>
                      <p className="text-xs text-muted-foreground mb-1">
                        <strong>{testimonial.admin}:</strong> "Gracias por compartir tu experiencia. Es un honor ser
                        parte de tu historia de transformación."
                      </p>
                      <span className="text-xs text-muted-foreground">{testimonial.adminDate}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              Ver Más Testimonios
            </Button>
          </div>
        </div>
      </section>

      {/* Interactive Chat Section */}
      <section id="chat" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4">Conversemos</h2>
            <p className="text-lg text-muted-foreground">Envíanos un mensaje y te responderemos pronto</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle>Chat con FUIID</CardTitle>
                    <p className="text-sm text-muted-foreground">Estamos aquí para ayudarte</p>
                  </div>
                  <div className="ml-auto">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                  {/* Sample chat messages */}
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <div className="bg-primary/10 rounded-lg p-3 max-w-xs">
                      <p className="text-sm">¡Hola! Bienvenido a FUIID. ¿En qué podemos ayudarte hoy?</p>
                      <span className="text-xs text-muted-foreground">Hace 2 minutos</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Tu nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Escribe tu nombre"
                      className="w-full px-3 py-2 border border-input rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="tu@email.com"
                      className="w-full px-3 py-2 border border-input rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Mensaje
                    </label>
                    <Textarea id="message" placeholder="Escribe tu mensaje aquí..." rows={4} />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <Send className="w-4 h-4 mr-2" />
                    Enviar Mensaje
                  </Button>
                </div>

                <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Phone className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">¿Prefieres llamarnos?</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Estamos disponibles de lunes a viernes de 8:00 AM a 5:00 PM
                  </p>
                  <p className="text-sm font-medium text-primary">300 480 5387</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl md:text-4xl mb-4">Contáctanos</h2>
            <p className="text-lg text-muted-foreground">Estamos aquí para apoyar tu proyecto social</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <Phone className="w-10 h-10 text-primary mx-auto mb-2" />
                <CardTitle>Teléfono</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">300 480 5387</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Mail className="w-10 h-10 text-primary mx-auto mb-2" />
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">servicios@fuiid.org</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <MapPin className="w-10 h-10 text-primary mx-auto mb-2" />
                <CardTitle>Dirección</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">CR 50 No 76 - 106 AP 1 A</p>
                <p className="text-muted-foreground text-sm">Barranquilla, Atlántico</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Enviar Mensaje
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Image src="/images/fuiid-logo.png" alt="FUIID Logo" width={32} height={32} className="rounded" />
              <div>
                <p className="font-serif font-bold text-primary">FUIID</p>
                <p className="text-xs text-muted-foreground">NIT: 900.554.517-8</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground">
                © 2025 Fundación para la Investigación e Inversión en Desarrollo
              </p>
              <p className="text-sm text-muted-foreground">
                Entidad Sin Ánimo de Lucro - Registro Cámara de Comercio No. 15.761
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
