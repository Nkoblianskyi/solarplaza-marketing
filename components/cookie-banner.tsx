"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already set cookie preference
    const cookieConsent = localStorage.getItem("cookie-consent")
    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setIsVisible(false)
  }

  const rejectCookies = () => {
    localStorage.setItem("cookie-consent", "rejected")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle>Política de Cookies</CardTitle>
          <CardDescription>Utilizamos cookies para mejorar su experiencia en nuestro sitio web.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Al hacer clic en {"Aceptar"}, usted acepta el uso de cookies para analítica, contenido personalizado y
            publicidad. Visite nuestra{" "}
            <Link href="/cookie-policy" className="underline">
              política de cookies
            </Link>{" "}
            para más información.
          </p>
        </CardContent>
        <CardFooter className="flex justify-end space-x-4">
          <Button variant="outline" onClick={rejectCookies}>
            Rechazar
          </Button>
          <Button onClick={acceptCookies}>Aceptar</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
