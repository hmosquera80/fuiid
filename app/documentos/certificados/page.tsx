"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download, FileText } from "lucide-react"
import Link from "next/link"

export default function CertificadosPage() {
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
          <h1 className="font-serif font-bold text-3xl mb-2">Certificados de Existencia y Representación Legal</h1>
          <p className="text-muted-foreground">Documentos oficiales organizados por año</p>
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
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-start bg-transparent"
                    onClick={() => window.open(`/documentos/pdf/certificados/certificado-${year}.pdf`, "_blank")}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Certificado {year}
                  </Button>
                  {year >= 2020 && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full justify-start bg-transparent"
                      onClick={() => window.open(`/documentos/pdf/certificados/renovacion-${year}.pdf`, "_blank")}
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Renovación {year}
                    </Button>
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
