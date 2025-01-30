import { AlertTriangle } from "lucide-react";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 p-4">
      <Card className="max-w-3xl w-full shadow-lg">
        <CardHeader className="text-center space-y-2">
          <div className="mx-auto bg-red-100 p-3 rounded-full">
            <AlertTriangle className="w-12 h-12 text-red-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Platform Suspended</h1>
          <p className="text-gray-500 text-lg">XORCA RCM Platform</p>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <Alert className="bg-amber-50 border-amber-200">
            <AlertDescription className="text-amber-900">
              Mohon maaf atas ketidaknyamanannya. Platform XORCA RCM saat ini sedang dalam status suspended.
            </AlertDescription>
          </Alert>
          
          <div className="space-y-4 text-gray-600">
            <p>
              Kami ingin menginformasikan bahwa platform XORCA RCM sedang dalam status suspended untuk sementara waktu. 
              Tim kami sedang bekerja keras untuk menyelesaikan situasi ini secepat mungkin.
            </p>
            <p>
              Selama masa suspensi ini, semua layanan dan akses ke platform tidak akan tersedia. 
              Kami akan memberikan informasi lebih lanjut segera setelah platform kembali beroperasi.
            </p>
          </div>
        </CardContent>
        
        <CardFooter className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center">
          <Button variant="outline">
            Hubungi Support
          </Button>
          <Button>
            Cek Status Platform
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Index;