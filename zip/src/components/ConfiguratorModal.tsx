import { useState } from 'react';
import { X } from 'lucide-react';

export default function ConfiguratorModal({ onClose }: { onClose: () => void }) {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [formato, setFormato] = useState<string | null>(null);
  const [material, setMaterial] = useState<string | null>(null);
  const [acabado, setAcabado] = useState<string | null>(null);
  const [complementos, setComplementos] = useState<string | null>(null);
  const [fechaCantidad, setFechaCantidad] = useState<string | null>(null);

  const products = [
    "Bolsas doypack",
    "Bolsas planas",
    "Bolsas de fondo plano",
    "Bolsas con fuelle lateral",
    "Sobres de papel",
    "Bolsas al vacío",
    "Bolsas compostables"
  ];

  const formatos = ["Pequeño", "Mediano", "Grande"];
  const materiales = ["Aluminio", "Papel", "Plástico reciclable"];
  const acabados = ["Satinado", "Mate", "Brillante"];
  const complementosList = ["Cierre zip", "Válvula", "Ninguno"];
  const fechasCantidades = ["50 uds - 5 días", "100 uds - 7 días", "500 uds - 10 días"];

  const handleSubmit = () => {
    console.log({
      producto: selectedProduct,
      formato,
      material,
      acabado,
      complementos,
      fechaCantidad
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800">
          <X size={24} />
        </button>
        
        <div className="p-8">
          {!selectedProduct ? (
            <>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Empiece por elegir el producto</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {products.map(p => (
                  <button 
                    key={p} 
                    onClick={() => setSelectedProduct(p)}
                    className="p-4 border-2 border-gray-200 rounded-lg hover:border-packstyle-green hover:bg-green-50 transition-colors text-left font-medium"
                  >
                    {p}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="space-y-8">
              <div className="flex justify-between items-center border-b pb-4">
                <h2 className="text-2xl font-bold text-gray-900">Configurando: {selectedProduct}</h2>
                <button onClick={() => setSelectedProduct(null)} className="text-sm text-blue-600 hover:underline">
                  Cambiar producto
                </button>
              </div>
              
              {/* Paso 1: Formato */}
              <div>
                <h3 className="text-lg font-bold mb-3">Paso 1: Formato</h3>
                <div className="flex flex-wrap gap-3">
                  {formatos.map(f => (
                    <button 
                      key={f}
                      onClick={() => {
                        setFormato(f);
                        setMaterial(null);
                        setAcabado(null);
                        setComplementos(null);
                        setFechaCantidad(null);
                      }}
                      className={`px-4 py-2 rounded-full border ${formato === f ? 'bg-packstyle-green text-white border-packstyle-green' : 'border-gray-300 hover:border-packstyle-green'}`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              {/* Paso 2: Material */}
              {formato && (
                <div className="animate-in fade-in slide-in-from-top-4 duration-300">
                  <h3 className="text-lg font-bold mb-3">Paso 2: Material</h3>
                  <div className="flex flex-wrap gap-3">
                    {materiales.map(m => (
                      <button 
                        key={m}
                        onClick={() => {
                          setMaterial(m);
                          setAcabado(null);
                          setComplementos(null);
                          setFechaCantidad(null);
                        }}
                        className={`px-4 py-2 rounded-full border ${material === m ? 'bg-packstyle-green text-white border-packstyle-green' : 'border-gray-300 hover:border-packstyle-green'}`}
                      >
                        {m}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Paso 3: Acabado */}
              {material && (
                <div className="animate-in fade-in slide-in-from-top-4 duration-300">
                  <h3 className="text-lg font-bold mb-3">Paso 3: Acabado</h3>
                  <div className="flex flex-wrap gap-3">
                    {acabados.map(a => (
                      <button 
                        key={a}
                        onClick={() => {
                          setAcabado(a);
                          setComplementos(null);
                          setFechaCantidad(null);
                        }}
                        className={`px-4 py-2 rounded-full border ${acabado === a ? 'bg-packstyle-green text-white border-packstyle-green' : 'border-gray-300 hover:border-packstyle-green'}`}
                      >
                        {a}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Paso 4: Complementos */}
              {acabado && (
                <div className="animate-in fade-in slide-in-from-top-4 duration-300">
                  <h3 className="text-lg font-bold mb-3">Paso 4: Complementos</h3>
                  <div className="flex flex-wrap gap-3">
                    {complementosList.map(c => (
                      <button 
                        key={c}
                        onClick={() => {
                          setComplementos(c);
                          setFechaCantidad(null);
                        }}
                        className={`px-4 py-2 rounded-full border ${complementos === c ? 'bg-packstyle-green text-white border-packstyle-green' : 'border-gray-300 hover:border-packstyle-green'}`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Paso 5: Fecha y cantidad */}
              {complementos && (
                <div className="animate-in fade-in slide-in-from-top-4 duration-300">
                  <h3 className="text-lg font-bold mb-3">Paso 5: Fecha y cantidad</h3>
                  <div className="flex flex-wrap gap-3">
                    {fechasCantidades.map(fc => (
                      <button 
                        key={fc}
                        onClick={() => setFechaCantidad(fc)}
                        className={`px-4 py-2 rounded-full border ${fechaCantidad === fc ? 'bg-packstyle-green text-white border-packstyle-green' : 'border-gray-300 hover:border-packstyle-green'}`}
                      >
                        {fc}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Submit */}
              {fechaCantidad && (
                <div className="pt-6 border-t animate-in fade-in duration-300">
                  <button 
                    onClick={handleSubmit}
                    className="w-full bg-packstyle-green text-white py-3 rounded-lg font-bold text-lg hover:bg-packstyle-green-dark transition-colors"
                  >
                    Enviar cotización
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
