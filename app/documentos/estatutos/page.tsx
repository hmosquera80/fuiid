"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download, FileText, Eye } from "lucide-react"
import Link from "next/link"

export default function EstatutosPage() {
  const years = Array.from({ length: 9 }, (_, i) => 2017 + i) // 2017-2025

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/#legal">
            <Button variant="outline" className="mb-4 bg-transparent">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver a Información Legal
            </Button>
          </Link>
          <h1 className="font-serif font-bold text-3xl mb-2">Estatutos de la Fundación</h1>
          <p className="text-muted-foreground">Estatutos y reformas organizados por año</p>
        </div>

        <div className="mb-8">
          <Card className="border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <FileText className="h-6 w-6" />
                Acta Constitutiva y de Reformas Estatutarias
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Acta N° 01 - Febrero 25, 2017</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Cambios fundamentales en artículos 3, 5, 7, 22, 27, 28, 32 y 33. Incluye cambio de domicilio a
                    Barranquilla, nuevo objeto social ampliado, cambio de socios y nombramiento de nueva junta
                    directiva.
                  </p>
                  <div className="flex gap-2">
                    <Button
                      className="bg-primary hover:bg-primary/90"
                      onClick={() => window.open(`/documentos/pdf/estatutos/acta-01-2017.pdf`, "_blank")}
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      Ver Documento
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => {
                        const link = document.createElement("a")
                        link.href = `/documentos/pdf/estatutos/acta-01-2017.pdf`
                        link.download = "Acta-01-Estatutos-FUIID-2017.pdf"
                        link.click()
                      }}
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Descargar
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {years.map((year) => (
            <Card key={year} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Año {year}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {year === 2017 ? (
                    <p className="text-sm text-muted-foreground py-2">Ver Acta N° 01 en la sección destacada arriba</p>
                  ) : (
                    <>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full justify-start bg-transparent"
                        onClick={() => window.open(`/documentos/pdf/estatutos/estatutos-${year}.pdf`, "_blank")}
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Estatutos {year}
                      </Button>
                      {year > 2017 && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full justify-start bg-transparent"
                          onClick={() => window.open(`/documentos/pdf/estatutos/reformas-${year}.pdf`, "_blank")}
                        >
                          <Download className="h-4 w-4 mr-2" />
                          Reformas {year}
                        </Button>
                      )}
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
