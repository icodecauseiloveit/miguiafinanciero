import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <main style={{ minHeight: "100vh", background: "var(--cream)", padding: "120px 24px 80px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", background: "var(--white)", padding: "60px 50px", borderRadius: 32, boxShadow: "0 20px 60px rgba(0,0,0,0.05)" }}>
        <Link href="/" style={{ color: "var(--blue)", fontWeight: 700, display: "flex", alignItems: "center", gap: 8, marginBottom: 40, fontSize: 14, textDecoration: "none" }}>
          ← Volver al inicio
        </Link>
        
        <h1 style={{ fontFamily: "var(--font-merriweather)", color: "var(--blue)", fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 900, marginBottom: 12, lineHeight: 1.2 }}>
          POLÍTICA DE PRIVACIDAD Y TRATAMIENTO DE DATOS PERSONALES
        </h1>
        <p style={{ color: "var(--blue-mid)", fontWeight: 700, marginBottom: 8 }}>MiGuiaFinanciero.com</p>
        <p style={{ color: "var(--gray-light)", fontSize: 14, marginBottom: 40 }}>Última actualización: Marzo de 2026</p>

        <hr style={{ border: "none", borderTop: "1px solid var(--gray-border)", marginBottom: 40 }} />

        <div style={{ color: "var(--gray)", lineHeight: 1.8, fontSize: 15 }}>
          <section id="1">
            <h2 style={{ color: "var(--blue)", fontWeight: 800, marginTop: 40, marginBottom: 20, fontSize: 20, borderLeft: "4px solid var(--yellow)", paddingLeft: 16 }}>1. IDENTIFICACIÓN DEL RESPONSABLE DEL TRATAMIENTO</h2>
            <p><strong>Razón social:</strong> Mi Guía Financiero</p>
            <p><strong>Nombre comercial:</strong> MiGuiaFinanciero.com</p>
            <p><strong>Domicilio:</strong> Cartagena D. T y C., Colombia</p>
            <p><strong>Correo electrónico de contacto:</strong> <a href="mailto:privacidad@miguiafinanciero.com" style={{ color: "var(--blue)", fontWeight: 600 }}>privacidad@miguiafinanciero.com</a></p>
            <p><strong>Sitio web:</strong> <a href="https://miguiafinanciero.com" style={{ color: "var(--blue)", fontWeight: 600 }}>https://miguiafinanciero.com</a></p>
            <p style={{ marginTop: 16 }}>Mi Guía Financiero (en adelante "MiGuiaFinanciero", "nosotros", "nos" o "nuestro") es el Responsable del Tratamiento de los datos personales recopilados a través de su sitio web, formularios de contacto, canales de WhatsApp, redes sociales y cualquier otro medio de comunicación utilizado en el desarrollo de su actividad.</p>
          </section>

          <section id="2">
            <h2 style={{ color: "var(--blue)", fontWeight: 800, marginTop: 40, marginBottom: 20, fontSize: 20, borderLeft: "4px solid var(--yellow)", paddingLeft: 16 }}>2. MARCO NORMATIVO</h2>
            <p>La presente Política de Privacidad y Tratamiento de Datos Personales se rige por la legislación colombiana vigente en materia de protección de datos personales, incluyendo:</p>
            <ul style={{ paddingLeft: 20, marginTop: 12 }}>
              <li><strong>Constitución Política de Colombia</strong>, artículos 15 y 20 (derecho a la intimidad, al buen nombre y al habeas data).</li>
              <li><strong>Ley Estatutaria 1581 de 2012</strong>, por la cual se dictan disposiciones generales para la protección de datos personales.</li>
              <li><strong>Decreto 1377 de 2013</strong>, que reglamenta parcialmente la Ley 1581 de 2012.</li>
              <li><strong>Decreto 1074 de 2015</strong> (Decreto Único Reglamentario del Sector Comercio, Industria y Turismo), en lo pertinente a protección de datos personales.</li>
              <li><strong>Sentencia C-748 de 2011</strong> de la Corte Constitucional.</li>
              <li>Demás normas concordantes, complementarias y modificatorias.</li>
            </ul>
          </section>

          <section id="3">
            <h2 style={{ color: "var(--blue)", fontWeight: 800, marginTop: 40, marginBottom: 20, fontSize: 20, borderLeft: "4px solid var(--yellow)", paddingLeft: 16 }}>3. ÁMBITO DE APLICACIÓN</h2>
            <p>Esta política aplica a todos los datos personales recopilados, almacenados, utilizados, circulados, suprimidos o tratados por MiGuiaFinanciero en el ejercicio de sus actividades, incluyendo los datos de:</p>
            <ul style={{ paddingLeft: 20, marginTop: 12 }}>
              <li>Usuarios y visitantes del sitio web miguiafinanciero.com.</li>
              <li>Personas que diligencien formularios de contacto o soliciten análisis de crédito.</li>
              <li>Clientes que contraten el servicio de reestructuración de créditos hipotecarios.</li>
              <li>Personas que se comuniquen por WhatsApp, correo electrónico, redes sociales u otros canales.</li>
              <li>Suscriptores de boletines informativos, contenidos educativos o simuladores.</li>
            </ul>
          </section>

          <section id="4">
            <h2 style={{ color: "var(--blue)", fontWeight: 800, marginTop: 40, marginBottom: 20, fontSize: 20, borderLeft: "4px solid var(--yellow)", paddingLeft: 16 }}>4. DEFINICIONES</h2>
            <p>Para efectos de la presente política, se adoptan las definiciones establecidas en el artículo 3 de la Ley 1581 de 2012 y el artículo 3 del Decreto 1377 de 2013:</p>
            <ul style={{ paddingLeft: 20, marginTop: 12, display: "grid", gap: 12 }}>
              <li><strong>Dato personal:</strong> Cualquier información vinculada o que pueda asociarse a una o varias personas naturales determinadas o determinables.</li>
              <li><strong>Dato público:</strong> Dato que no sea semiprivado, privado o sensible. Son datos públicos, entre otros, los relativos al estado civil, profesión u oficio.</li>
              <li><strong>Dato semiprivado:</strong> Dato que no tiene naturaleza íntima, reservada ni pública y cuyo conocimiento o divulgación puede interesar no solo a su titular sino a cierto sector o grupo de personas.</li>
              <li><strong>Dato privado:</strong> Dato que por su naturaleza íntima o reservada solo es relevante para el titular.</li>
              <li><strong>Dato sensible:</strong> Dato que afecta la intimidad del titular o cuyo uso indebido puede generar su discriminación (origen racial o étnico, orientación política, convicciones religiosas, datos relativos a la salud, vida sexual, datos biométricos, entre otros).</li>
              <li><strong>Titular:</strong> Persona natural cuyos datos personales sean objeto de tratamiento.</li>
              <li><strong>Responsable del Tratamiento:</strong> Persona natural o jurídica, pública o privada, que por sí misma o en asocio con otros, decida sobre la base de datos y/o el tratamiento de los datos.</li>
              <li><strong>Encargado del Tratamiento:</strong> Persona natural o jurídica, pública o privada, que por sí misma o en asocio con otros, realice el tratamiento de datos personales por cuenta del Responsable del Tratamiento.</li>
              <li><strong>Tratamiento:</strong> Cualquier operación o conjunto de operaciones sobre datos personales, tales como la recolección, almacenamiento, uso, circulación o supresión.</li>
              <li><strong>Autorización:</strong> Consentimiento previo, expreso e informado del Titular para llevar a cabo el tratamiento de datos personales.</li>
              <li><strong>Aviso de privacidad:</strong> Comunicación verbal o escrita dirigida al Titular para informarle acerca de la existencia de las políticas de tratamiento de información que le serán aplicables.</li>
              <li><strong>Base de datos:</strong> Conjunto organizado de datos personales que sea objeto de tratamiento.</li>
              <li><strong>Transferencia:</strong> Envío de datos personales por parte del Responsable y/o Encargado del Tratamiento a un receptor que, a su vez, es Responsable del Tratamiento y se encuentra dentro o fuera del país.</li>
              <li><strong>Transmisión:</strong> Tratamiento de datos personales que implica la comunicación de los mismos dentro o fuera del territorio colombiano cuando tenga por objeto la realización de un tratamiento por el Encargado por cuenta del Responsable.</li>
            </ul>
          </section>

          <section id="5">
            <h2 style={{ color: "var(--blue)", fontWeight: 800, marginTop: 40, marginBottom: 20, fontSize: 20, borderLeft: "4px solid var(--yellow)", paddingLeft: 16 }}>5. PRINCIPIOS RECTORES DEL TRATAMIENTO</h2>
            <p>El tratamiento de datos personales por parte de MiGuiaFinanciero se rige por los siguientes principios, conforme a lo establecido en el artículo 4 de la Ley 1581 de 2012:</p>
            <div style={{ display: "grid", gap: 16, marginTop: 16 }}>
              <p><strong>5.1 Principio de legalidad:</strong> El tratamiento de datos personales es una actividad reglada que se sujeta a lo establecido en la Ley 1581 de 2012 y en las demás disposiciones que la desarrollen.</p>
              <p><strong>5.2 Principio de finalidad:</strong> El tratamiento debe obedecer a una finalidad legítima de acuerdo con la Constitución y la ley, la cual debe ser informada al Titular.</p>
              <p><strong>5.3 Principio de libertad:</strong> El tratamiento solo puede ejercerse con el consentimiento previo, expreso e informado del Titular, salvo las excepciones legales.</p>
              <p><strong>5.4 Principio de veracidad o calidad:</strong> La información sujeta a tratamiento debe ser veraz, completa, exacta, actualizada, comprobable y comprensible.</p>
              <p><strong>5.5 Principio de transparencia:</strong> En el tratamiento debe garantizarse el derecho del Titular a obtener del Responsable o del Encargado del Tratamiento, en cualquier momento y sin restricciones, información acerca de la existencia de datos que le conciernan.</p>
              <p><strong>5.6 Principio de acceso y circulación restringida:</strong> El tratamiento se sujeta a los límites que se derivan de la naturaleza de los datos personales, de las disposiciones de la ley y la Constitución. Los datos personales, salvo la información pública, no podrán estar disponibles en internet u otros medios de divulgación o comunicación masiva, salvo que el acceso sea técnicamente controlable para brindar un conocimiento restringido solo a los Titulares o terceros autorizados.</p>
              <p><strong>5.7 Principio de seguridad:</strong> La información sujeta a tratamiento se deberá manejar con las medidas técnicas, humanas y administrativas que sean necesarias para otorgar seguridad a los registros, evitando su adulteración, pérdida, consulta, uso o acceso no autorizado o fraudulento.</p>
              <p><strong>5.8 Principio de confidencialidad:</strong> Todas las personas que intervengan en el tratamiento de datos personales están obligadas a garantizar la reserva de la información, inclusive después de finalizada su relación con alguna de las labores que comprende el tratamiento.</p>
            </div>
          </section>

          <section id="6">
            <h2 style={{ color: "var(--blue)", fontWeight: 800, marginTop: 40, marginBottom: 20, fontSize: 20, borderLeft: "4px solid var(--yellow)", paddingLeft: 16 }}>6. DATOS PERSONALES QUE RECOPILAMOS</h2>
            <h3 style={{ color: "var(--blue)", fontSize: 17, fontWeight: 700, marginTop: 20 }}>6.1 Datos recopilados a través del formulario de contacto del sitio web</h3>
            <ul style={{ paddingLeft: 20 }}>
              <li>Nombre completo.</li>
              <li>Número de teléfono celular o WhatsApp.</li>
              <li>Monto aproximado de la deuda hipotecaria.</li>
              <li>Tipo de crédito (UVR, pesos o desconocido).</li>
            </ul>
            <h3 style={{ color: "var(--blue)", fontSize: 17, fontWeight: 700, marginTop: 20 }}>6.2 Datos recopilados durante la prestación del servicio</h3>
            <p>Cuando el usuario decide contratar nuestro servicio de reestructuración de créditos hipotecarios, podremos recopilar adicionalmente:</p>
            <ul style={{ paddingLeft: 20 }}>
              <li>Número de identificación (cédula de ciudadanía o cédula de extranjería).</li>
              <li>Dirección de residencia y ciudad.</li>
              <li>Correo electrónico.</li>
              <li>Información laboral y de ingresos (empleador, cargo, ingresos mensuales).</li>
              <li>Información del crédito hipotecario: entidad financiera, número del crédito, saldo, tasa de interés, plazo, cuota mensual, fecha de desembolso.</li>
              <li>Extractos bancarios del crédito hipotecario.</li>
              <li>Tabla de amortización vigente.</li>
              <li>Comunicaciones del banco relacionadas con el crédito.</li>
              <li>Cualquier otro dato que el cliente suministre voluntariamente para la gestión de su caso.</li>
            </ul>
            <h3 style={{ color: "var(--blue)", fontSize: 17, fontWeight: 700, marginTop: 20 }}>6.3 Datos recopilados automáticamente a través del sitio web</h3>
            <ul style={{ paddingLeft: 20 }}>
              <li>Dirección IP.</li>
              <li>Tipo de navegador y sistema operativo.</li>
              <li>Páginas visitadas y tiempo de permanencia.</li>
              <li>Fuente de tráfico (desde qué sitio web o red social llegó el usuario).</li>
              <li>Datos de cookies (ver sección 13).</li>
            </ul>
            <h3 style={{ color: "var(--blue)", fontSize: 17, fontWeight: 700, marginTop: 20 }}>6.4 Datos que NO recopilamos</h3>
            <p>MiGuiaFinanciero <strong>no</strong> recopila datos sensibles según lo definido en el artículo 5 de la Ley 1581 de 2012, tales como datos que revelen el origen racial o étnico, la orientación política, las convicciones religiosas o filosóficas, datos relativos a la salud, la vida sexual o datos biométricos.</p>
          </section>

          <section id="7">
            <h2 style={{ color: "var(--blue)", fontWeight: 800, marginTop: 40, marginBottom: 20, fontSize: 20, borderLeft: "4px solid var(--yellow)", paddingLeft: 16 }}>7. FINALIDADES DEL TRATAMIENTO</h2>
            <p>Los datos personales que recopilamos son tratados para las siguientes finalidades:</p>
            <h3 style={{ color: "var(--blue)", fontSize: 17, fontWeight: 700, marginTop: 20 }}>7.1 Finalidades principales (relacionadas directamente con el servicio)</h3>
            <ul style={{ paddingLeft: 20 }}>
              <li>Realizar el análisis gratuito del crédito hipotecario del usuario y generar la proyección de ahorro personalizada.</li>
              <li>Contactar al usuario por WhatsApp, llamada telefónica o correo electrónico para entregar el resultado del análisis.</li>
              <li>Representar al cliente ante la entidad financiera para gestionar la reestructuración del crédito hipotecario bajo la Ley 546 de 1999.</li>
              <li>Preparar la documentación necesaria para solicitar los beneficios legales ante el banco (abonos a capital, reestructuración, portabilidad).</li>
              <li>Hacer seguimiento al proceso de reestructuración y verificar la aplicación efectiva del beneficio por parte de la entidad financiera.</li>
              <li>Calcular los honorarios del servicio con base en el ahorro efectivamente obtenido y confirmado por el banco.</li>
              <li>Facturar y gestionar el cobro de los honorarios pactados.</li>
              <li>Dar cumplimiento a obligaciones contractuales con el cliente.</li>
            </ul>
            <h3 style={{ color: "var(--blue)", fontSize: 17, fontWeight: 700, marginTop: 20 }}>7.2 Finalidades secundarias (con autorización del Titular)</h3>
            <ul style={{ paddingLeft: 20 }}>
              <li>Enviar información comercial, promocional o educativa sobre créditos hipotecarios, derechos del deudor y temas financieros relacionados.</li>
              <li>Enviar boletines informativos, guías, simulaciones y contenido educativo sobre la Ley 546 de 1999.</li>
              <li>Realizar encuestas de satisfacción del servicio.</li>
              <li>Solicitar testimonios o casos de éxito para publicación en el sitio web y redes sociales (siempre con autorización expresa).</li>
              <li>Realizar análisis estadísticos y estudios de mercado internos para mejorar nuestros servicios.</li>
              <li>Invitar a eventos, webinars o actividades educativas organizadas por MiGuiaFinanciero.</li>
            </ul>
            <p style={{ marginTop: 12 }}>El Titular podrá en cualquier momento solicitar la exclusión de las comunicaciones con finalidad secundaria sin que ello afecte la prestación del servicio contratado.</p>
          </section>

          <section id="8">
            <h2 style={{ color: "var(--blue)", fontWeight: 800, marginTop: 40, marginBottom: 20, fontSize: 20, borderLeft: "4px solid var(--yellow)", paddingLeft: 16 }}>8. AUTORIZACIÓN DEL TITULAR</h2>
            <p>De conformidad con el artículo 9 de la Ley 1581 de 2012, MiGuiaFinanciero obtendrá la autorización previa, expresa e informada del Titular para el tratamiento de sus datos personales. Dicha autorización podrá ser obtenida por cualquier medio que pueda ser objeto de consulta posterior, incluyendo:</p>
            <ul style={{ paddingLeft: 20, marginTop: 12 }}>
              <li>Aceptación expresa mediante el formulario de contacto en el sitio web (al hacer clic en el botón de envío con la leyenda correspondiente).</li>
              <li>Mensaje escrito de WhatsApp en el que el Titular manifieste su consentimiento.</li>
              <li>Correo electrónico en el que el Titular otorgue su autorización.</li>
              <li>Documento escrito o formato físico firmado por el Titular.</li>
              <li>Conducta inequívoca del Titular que permita concluir razonablemente que otorgó su autorización.</li>
            </ul>
          </section>

          <section id="9">
            <h2 style={{ color: "var(--blue)", fontWeight: 800, marginTop: 40, marginBottom: 20, fontSize: 20, borderLeft: "4px solid var(--yellow)", paddingLeft: 16 }}>9. DERECHOS DE LOS TITULARES</h2>
            <p>De conformidad con el artículo 8 de la Ley 1581 de 2012, el Titular de los datos personales tiene los siguientes derechos:</p>
            <div style={{ display: "grid", gap: 16, marginTop: 16 }}>
              <p><strong>9.1</strong> Conocer, actualizar y rectificar sus datos personales frente a MiGuiaFinanciero. Este derecho se podrá ejercer frente a datos parciales, inexactos, incompletos, fraccionados, que induzcan a error, o aquellos cuyo tratamiento esté expresamente prohibido o no haya sido autorizado.</p>
              <p><strong>9.2</strong> Solicitar prueba de la autorización otorgada a MiGuiaFinanciero, salvo cuando expresamente se exceptúe como requisito para el tratamiento conforme a lo previsto en el artículo 10 de la Ley 1581 de 2012.</p>
              <p><strong>9.3</strong> Ser informado por MiGuiaFinanciero, previa solicitud, respecto del uso que le ha dado a sus datos personales.</p>
              <p><strong>9.4</strong> Presentar ante la Superintendencia de Industria y Comercio (SIC) quejas por infracciones a lo dispuesto en la Ley 1581 de 2012 y las demás normas que la modifiquen, adicionen o complementen, una vez haya agotado el trámite de consulta o reclamo ante MiGuiaFinanciero.</p>
              <p><strong>9.5</strong> Revocar la autorización y/o solicitar la supresión del dato cuando en el tratamiento no se respeten los principios, derechos y garantías constitucionales y legales.</p>
              <p><strong>9.6</strong> Acceder en forma gratuita a sus datos personales que hayan sido objeto de tratamiento.</p>
            </div>
          </section>

          <section id="10">
            <h2 style={{ color: "var(--blue)", fontWeight: 800, marginTop: 40, marginBottom: 20, fontSize: 20, borderLeft: "4px solid var(--yellow)", paddingLeft: 16 }}>10. PROCEDIMIENTO PARA EJERCER LOS DERECHOS</h2>
            <h3 style={{ color: "var(--blue)", fontSize: 17, fontWeight: 700, marginTop: 20 }}>10.1 Canal de atención</h3>
            <p>Los Titulares podrán ejercer sus derechos mediante comunicación escrita dirigida a:</p>
            <ul style={{ paddingLeft: 20, marginTop: 8 }}>
              <li><strong>Correo electrónico:</strong> <a href="mailto:privacidad@miguiafinanciero.com" style={{ color: "var(--blue)" }}>privacidad@miguiafinanciero.com</a></li>
              <li><strong>WhatsApp:</strong> [Número a definir por el cliente]</li>
              <li><strong>Dirección física:</strong> [Dirección a definir por el cliente], Cartagena D. T y C., Colombia</li>
            </ul>
            <h3 style={{ color: "var(--blue)", fontSize: 17, fontWeight: 700, marginTop: 24 }}>10.2 Consultas (Art. 14, Ley 1581 de 2012)</h3>
            <p>El Titular o sus causahabientes podrán consultar la información personal del Titular que repose en la base de datos de MiGuiaFinanciero. La consulta será atendida en un término máximo de diez (10) días hábiles contados a partir de la fecha de recibo de la solicitud. Cuando no fuere posible atender la consulta dentro de dicho término, se informará al interesado, expresando los motivos de la demora y señalando la fecha en que se atenderá, la cual en ningún caso podrá superar los cinco (5) días hábiles siguientes al vencimiento del primer término.</p>
            <h3 style={{ color: "var(--blue)", fontSize: 17, fontWeight: 700, marginTop: 24 }}>10.3 Reclamos (Art. 15, Ley 1581 de 2012)</h3>
            <p>El Titular o sus causahabientes que consideren que la información contenida en una base de datos debe ser objeto de corrección, actualización o supresión, o cuando adviertan el presunto incumplimiento de cualquiera de los deberes contenidos en la Ley 1581 de 2012, podrán presentar un reclamo ante MiGuiaFinanciero, el cual será tramitado bajo las siguientes reglas:</p>
            <ol style={{ paddingLeft: 20, marginTop: 12, display: "grid", gap: 12 }}>
              <li>El reclamo deberá formularse mediante solicitud dirigida a MiGuiaFinanciero a los canales indicados en la sección 10.1, con la identificación del Titular, la descripción de los hechos que dan lugar al reclamo, la dirección, y acompañando los documentos que se quiera hacer valer.</li>
              <li>Si el reclamo resulta incompleto, se requerirá al interesado dentro de los cinco (5) días siguientes a la recepción del reclamo para que subsane las fallas. Transcurridos dos (2) meses desde la fecha del requerimiento sin que el solicitante presente la información requerida, se entenderá que ha desistido del reclamo.</li>
              <li>Una vez recibido el reclamo completo, se incluirá en la base de datos una leyenda que diga "reclamo en trámite" y el motivo del mismo, en un término no mayor a dos (2) días hábiles. Dicha leyenda deberá mantenerse hasta que el reclamo sea decidido.</li>
              <li>El término máximo para atender el reclamo será de quince (15) días hábiles contados a partir del día siguiente a la fecha de su recibo. Cuando no fuere posible atender el reclamo dentro de dicho término, se informará al interesado los motivos de la demora y la fecha en que se atenderá, la cual en ningún caso podrá superar los ocho (8) días hábiles siguientes al vencimiento del primer término.</li>
            </ol>
          </section>

          <section id="11">
            <h2 style={{ color: "var(--blue)", fontWeight: 800, marginTop: 40, marginBottom: 20, fontSize: 20, borderLeft: "4px solid var(--yellow)", paddingLeft: 16 }}>11. MEDIDAS DE SEGURIDAD</h2>
            <p>MiGuiaFinanciero implementa las medidas técnicas, humanas y administrativas necesarias para otorgar seguridad a los datos personales, evitando su adulteración, pérdida, consulta, uso o acceso no autorizado o fraudulento. Entre las medidas adoptadas se incluyen:</p>
            <ul style={{ paddingLeft: 20, marginTop: 12 }}>
              <li>Almacenamiento de datos en servidores seguros con cifrado de datos en tránsito (SSL/TLS) y en reposo.</li>
              <li>Restricción de acceso a los datos personales solo al personal autorizado que necesite conocerlos para la prestación del servicio.</li>
              <li>Uso de contraseñas robustas y autenticación de dos factores para acceder a los sistemas donde se almacenan datos personales.</li>
              <li>Compromiso de confidencialidad por parte de todas las personas que tengan acceso a los datos personales.</li>
              <li>Respaldo periódico de la información.</li>
              <li>Protocolo de respuesta ante incidentes de seguridad de datos.</li>
            </ul>
          </section>

          <section id="12">
            <h2 style={{ color: "var(--blue)", fontWeight: 800, marginTop: 40, marginBottom: 20, fontSize: 20, borderLeft: "4px solid var(--yellow)", paddingLeft: 16 }}>12. TRANSFERENCIA Y TRANSMISIÓN DE DATOS</h2>
            <h3 style={{ color: "var(--blue)", fontSize: 17, fontWeight: 700, marginTop: 20 }}>12.1 Transferencia internacional</h3>
            <p>MiGuiaFinanciero <strong>no</strong> transfiere datos personales a terceros países, salvo que se presente alguna de las excepciones previstas en el artículo 26 de la Ley 1581 de 2012.</p>
            <h3 style={{ color: "var(--blue)", fontSize: 17, fontWeight: 700, marginTop: 20 }}>12.2 Transmisión nacional</h3>
            <p>MiGuiaFinanciero podrá transmitir datos personales a terceros que actúen como Encargados del Tratamiento únicamente para las finalidades descritas en esta política.</p>
          </section>

          <section id="13">
            <h2 style={{ color: "var(--blue)", fontWeight: 800, marginTop: 40, marginBottom: 20, fontSize: 20, borderLeft: "4px solid var(--yellow)", paddingLeft: 16 }}>13. POLÍTICA DE COOKIES</h2>
            <p>Las cookies son pequeños archivos de texto que se almacenan en el navegador del usuario cuando visita un sitio web. Permiten que el sitio recuerde información sobre la visita del usuario. El usuario puede configurar su navegador para aceptar o rechazar cookies.</p>
          </section>

          <section id="14">
            <h2 style={{ color: "var(--blue)", fontWeight: 800, marginTop: 40, marginBottom: 20, fontSize: 20, borderLeft: "4px solid var(--yellow)", paddingLeft: 16 }}>14. VIGENCIA DE LA BASE DE DATOS Y PERIODO DE ALMACENAMIENTO</h2>
            <p>Los datos personales serán almacenados por el tiempo necesario para cumplir con las finalidades descritas en esta política, y conforme a los criterios legales de almacenamiento (generalmente entre 1 y 5 años según la finalidad).</p>
          </section>

          <section id="15">
            <h2 style={{ color: "var(--blue)", fontWeight: 800, marginTop: 40, marginBottom: 20, fontSize: 20, borderLeft: "4px solid var(--yellow)", paddingLeft: 16 }}>15. TRATAMIENTO DE DATOS DE MENORES DE EDAD</h2>
            <p>MiGuiaFinanciero <strong>no</strong> recopila ni trata datos personales de niños, niñas o adolescentes. Nuestros servicios están dirigidos exclusivamente a personas mayores de edad.</p>
          </section>

          <section id="16">
            <h2 style={{ color: "var(--blue)", fontWeight: 800, marginTop: 40, marginBottom: 20, fontSize: 20, borderLeft: "4px solid var(--yellow)", paddingLeft: 16 }}>16. MODIFICACIONES A LA POLÍTICA</h2>
            <p>MiGuiaFinanciero se reserva el derecho de modificar la presente Política de Privacidad en cualquier momento. Cualquier cambio sustancial será comunicado oportunamente a través de nuestro sitio web.</p>
          </section>

          <section id="17">
            <h2 style={{ color: "var(--blue)", fontWeight: 800, marginTop: 40, marginBottom: 20, fontSize: 20, borderLeft: "4px solid var(--yellow)", paddingLeft: 16 }}>17. LEGISLACIÓN APLICABLE Y JURISDICCIÓN</h2>
            <p>La presente Política de Privacidad se rige por las leyes de la República de Colombia. Cualquier controversia que surja en relación con el tratamiento de datos personales será sometida a la jurisdicción de los jueces de la República de Colombia, con domicilio en la ciudad de Cartagena D. T y C.</p>
          </section>

          <section id="18" style={{ marginTop: 60, padding: "30px", background: "var(--cream)", borderRadius: "20px" }}>
            <h2 style={{ color: "var(--blue)", fontWeight: 800, marginBottom: 20, fontSize: 20 }}>18. CONTACTO</h2>
            <p>Para cualquier consulta, reclamo o solicitud relacionada con sus datos personales:</p>
            <ul style={{ listStyle: "none", padding: 0, marginTop: 12 }}>
              <li>📧 <strong>Email:</strong> <a href="mailto:privacidad@miguiafinanciero.com" style={{ color: "var(--blue)" }}>privacidad@miguiafinanciero.com</a></li>
              <li>🌐 <strong>Web:</strong> <a href="https://miguiafinanciero.com" style={{ color: "var(--blue)" }}>miguiafinanciero.com</a></li>
            </ul>
          </section>
        </div>

        <p style={{ marginTop: 60, fontSize: 13, color: "var(--gray-light)", textAlign: "center", borderTop: "1px solid var(--gray-border)", paddingTop: 32 }}>
          *La presente Política de Privacidad y Tratamiento de Datos Personales fue actualizada en marzo de 2026 y se encuentra vigente desde su publicación en el sitio web miguiafinanciero.com.*
        </p>
      </div>
    </main>
  );
}
