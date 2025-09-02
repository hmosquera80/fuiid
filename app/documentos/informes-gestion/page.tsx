"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download, FileText, Calendar } from "lucide-react"
import Link from "next/link"

export default function InformesGestionPage() {
  const availableReports = {
    2017: [
      {
        name: "Informe Anual 2017",
        file: "informe-anual-2017.pdf",
        description: "Contratos ejecutados y acciones intersectoriales",
      },
    ],
    2019: [
      {
        name: "Informe Anual 2019",
        file: "informe-anual-2019.pdf",
        description: "Servicios especializados en salud mental",
      },
      {
        name: "Reporte de Actividades 2019",
        file: "actividades-2019.pdf",
        description: "Acompañamiento a gestión en salud pública",
      },
    ],
    2024: [
      {
        name: "Informe Anual 2024",
        file: "informe-anual-2024.pdf",
        description: "Fortalecimiento participación comunitaria",
      },
    ],
  }

  const allYears = Array.from({ length: 9 }, (_, i) => 2017 + i) // 2017-2025

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
          <h1 className="font-serif font-bold text-3xl mb-2">Informes de Gestión</h1>
          <p className="text-muted-foreground">Informes anuales de gestión y actividades de la Fundación FUIID</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allYears.map((year) => {
            const hasReports = availableReports[year as keyof typeof availableReports]

            return (
              <Card
                key={year}
                className={`transition-all duration-200 ${hasReports ? "hover:shadow-lg border-primary/20" : "opacity-60"}`}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    Año {year}
                    {hasReports && (
                      <span className="ml-auto bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                        Disponible
                      </span>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {hasReports ? (
                    <div className="space-y-3">
                      {hasReports.map((report, index) => (
                        <div key={index} className="border rounded-lg p-3 bg-muted/30">
                          <h4 className="font-medium text-sm mb-1">{report.name}</h4>
                          <p className="text-xs text-muted-foreground mb-2">{report.description}</p>
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full justify-start bg-transparent hover:bg-primary/5"
                            onClick={() => window.open(`/documentos/pdf/informes-gestion/${report.file}`, "_blank")}
                          >
                            <Download className="h-4 w-4 mr-2" />
                            Descargar PDF
                          </Button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-4">
                      <FileText className="h-8 w-8 text-muted-foreground/50 mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Documentos en preparación</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 bg-muted/30 rounded-lg p-6">
          <h2 className="font-serif font-bold text-xl mb-4">Resumen de Informes Disponibles</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">4</div>
              <div className="text-sm text-muted-foreground">Informes Publicados</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary mb-1">3</div>
              <div className="text-sm text-muted-foreground">Años Documentados</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-1">2017-2024</div>
              <div className="text-sm text-muted-foreground">Período Cubierto</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
