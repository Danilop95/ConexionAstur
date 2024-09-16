import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Facebook, Instagram, Phone, Wifi, Shield, Users, Zap } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Image src="/logo.svg" alt="Conexión Astur Logo" width={40} height={40} />
            <span className="text-2xl font-bold">Conexión Astur</span>
          </div>
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="hover:underline">Inicio</a>
            <a href="#" className="hover:underline">Servicios</a>
            <a href="#" className="hover:underline">Tarifas</a>
            <a href="#" className="hover:underline">Contacto</a>
          </nav>
          <div className="flex items-center space-x-4">
            <Facebook className="w-6 h-6" />
            <Instagram className="w-6 h-6" />
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              <span>604 869 662</span>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-gradient-to-r from-primary to-primary-foreground text-white py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Compromiso con la Innovación y la Conectividad</h1>
            <p className="text-xl mb-8">Conexión Astur es líder en proveer soluciones avanzadas en internet, telefonía y seguridad.</p>
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              ¡Conéctate ahora!
            </Button>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Características de nuestros servicios</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="w-6 h-6 mr-2" />
                    Atención personalizada
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Nuestro equipo está siempre dispuesto a ayudarte y resolver tus dudas, brindándote un trato personalizado y cercano.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Wifi className="w-6 h-6 mr-2" />
                    Cobertura de fibra nacional
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Disfruta de una conexión de alta velocidad en cualquier parte del país gracias a nuestra amplia cobertura de fibra óptica.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="w-6 h-6 mr-2" />
                    Precios definitivos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  No te preocupes por sorpresas en tu factura, nuestros precios son transparentes y no sufrirán aumentos inesperados.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Nuestras tarifas</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Fibra 300 Megas + 80GB</CardTitle>
                  <CardDescription>Ilimitadas + teléfono fijo</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold mb-4">35€/mes</p>
                  <ul className="list-disc list-inside mb-4">
                    <li>Tecnología FTTH</li>
                    <li>Hasta 4 líneas adicionales</li>
                    <li>Bonos adicionales</li>
                    <li>3 meses de permanencia</li>
                  </ul>
                  <Button className="w-full">Más información</Button>
                </CardContent>
              </Card>
              <Card className="border-primary">
                <CardHeader>
                  <CardTitle>Fibra 600 Megas + 100GB</CardTitle>
                  <CardDescription>Ilimitadas + teléfono fijo</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold mb-4">45€/mes</p>
                  <ul className="list-disc list-inside mb-4">
                    <li>WIFI 6 PLUS</li>
                    <li>Tecnología FTTH</li>
                    <li>Hasta 4 líneas adicionales</li>
                    <li>Bonos adicionales</li>
                    <li>3 meses de permanencia</li>
                  </ul>
                  <Button className="w-full">Más información</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Fibra 1 Giga + 100GB</CardTitle>
                  <CardDescription>Ilimitadas + teléfono fijo</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold mb-4">50€/mes</p>
                  <ul className="list-disc list-inside mb-4">
                    <li>WIFI 6 PLUS</li>
                    <li>Tecnología FTTH</li>
                    <li>Hasta 4 líneas adicionales</li>
                    <li>Bonos adicionales</li>
                    <li>3 meses de permanencia</li>
                  </ul>
                  <Button className="w-full">Más información</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">¿Cómo funcionamos?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Phone className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Ponte en contacto</h3>
                <p>Envíanos un mensaje por redes sociales o WhatsApp. Estaremos encantados de ayudarte.</p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Personalizado</h3>
                <p>Te escuchamos y ofrecemos los servicios que mejor se adapten a tus necesidades.</p>
              </div>
              <div className="text-center">
                <Zap className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Contrátanos</h3>
                <p>Una vez que veas nuestra propuesta y tu ahorro, solo queda un paso: formar parte de nuestra familia.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">¡Obtén la mejor conexión a Internet!</h2>
            <form className="max-w-md mx-auto">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Nombre</Label>
                  <Input id="name" placeholder="Tu nombre" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="tu@email.com" />
                </div>
                <div>
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input id="phone" type="tel" placeholder="Tu número de teléfono" />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <label htmlFor="terms" className="text-sm">
                    He leído y acepto la política de privacidad
                  </label>
                </div>
                <Button className="w-full">Pedir más información</Button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-muted py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Conexión Astur. Todos los derechos reservados.</p>
          <div className="mt-4">
            <a href="#" className="text-sm hover:underline mr-4">Política de privacidad</a>
            <a href="#" className="text-sm hover:underline mr-4">Condiciones de uso</a>
            <a href="#" className="text-sm hover:underline">Aviso legal</a>
          </div>
        </div>
      </footer>
    </div>
  )
}