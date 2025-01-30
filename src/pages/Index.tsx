import { AlertTriangle, MessageSquare } from "lucide-react";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

const Index = () => {
  const handleWhatsAppSupport = () => {
    window.open('https://wa.me/6281233393913', '_blank');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 p-4">
      <Card className="max-w-3xl w-full shadow-lg">
        <CardHeader className="text-center space-y-4">
          <img 
            src="https://e-katalog.lkpp.go.id/katalog/produk/download/gambar/963969311?file_name=5684291858671581.png&v=3&file_sub_location=produk_gambar%2F2023%2F07%2F13"
            alt="XORCA Logo"
            className="h-16 mx-auto object-contain"
          />
          <div className="mx-auto bg-red-100 p-3 rounded-full">
            <AlertTriangle className="w-12 h-12 text-red-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Platform Suspended</h1>
          <p className="text-gray-500 text-lg">XORCA RCM Platform</p>
        </CardHeader>
        
        <CardContent className="space-y-6 text-center">
          <Alert className="bg-amber-50 border-amber-200">
            <AlertDescription className="text-amber-900">
              Mohon maaf, akses ke platform XORCA RCM telah dihentikan karena masa Proof of Concept (POC) telah berakhir.
            </AlertDescription>
          </Alert>
          
          <div className="space-y-4 text-gray-600">
            <p>
              Kami ingin menginformasikan bahwa periode Proof of Concept (POC) untuk platform XORCA RCM telah selesai. 
              Sebagai konsekuensinya, akses ke platform saat ini telah dinonaktifkan.
            </p>
            <p>
              Untuk melanjutkan penggunaan platform XORCA RCM, silakan hubungi tim kami untuk mendiskusikan 
              kelanjutan kerjasama dan peningkatan ke versi production.
            </p>
          </div>
        </CardContent>
        
        <CardFooter className="flex justify-center">
          <Button variant="outline" onClick={handleWhatsAppSupport}>
            <MessageSquare className="mr-2" />
            Hubungi Support
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Index;