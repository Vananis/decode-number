export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return (
    <html lang={locale} className="light" style={{ colorScheme: "light" }} suppressHydrationWarning>
      {children}
    </html>
  )
}
