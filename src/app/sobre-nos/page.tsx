"use client";

import {
  FaMapMarkerAlt,
  FaClock,
  FaPhone,
  FaWhatsapp,
  FaInfoCircle,
} from "react-icons/fa";
import { institutionalInfo, hemorredeUnits } from "./data";
import {
  PageWrapper,
  MissionSection,
  NetworkHeader,
  GridNetwork,
  UnitCard,
  UnitTitle,
  MetaInfo,
  ContactWrapper,
  ContactTag,
} from "./styles";

export default function SobreNosPage() {
  // Função auxiliar para gerar link do Google Maps
  const getMapsUrl = (address: string) =>
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  // Função para formatar número do WhatsApp (remove caracteres não numéricos)
  const getWhatsAppUrl = (number: string) => {
    const cleanNumber = number.replace(/\D/g, "");
    return `https://wa.me/55${cleanNumber}`;
  };

  return (
    <PageWrapper>
      <MissionSection>
        <FaInfoCircle
          size={40}
          color="#c53030"
          style={{ marginBottom: "16px" }}
        />
        <h1>{institutionalInfo.title}</h1>
        <p>{institutionalInfo.mission}</p>
      </MissionSection>

      <section>
        <NetworkHeader>
          <h2>Nossa Hemorrede</h2>
          <p>Encontre a unidade de coleta de sangue mais próxima de você.</p>
        </NetworkHeader>

        <GridNetwork>
          {hemorredeUnits.map((unit) => (
            <UnitCard key={unit.id} $isMain={unit.isMainNode}>
              <UnitTitle>{unit.city}</UnitTitle>

              <MetaInfo>
                <FaMapMarkerAlt className="icon" />
                {/* Link direto para o Google Maps */}
                <a
                  href={getMapsUrl(unit.address)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {unit.address}
                </a>
              </MetaInfo>

              <MetaInfo>
                <FaClock className="icon" />
                <ul>
                  {unit.operatingHours.map((hour, index) => (
                    <li key={index}>{hour}</li>
                  ))}
                </ul>
              </MetaInfo>

              {unit.contacts && (
                <ContactWrapper>
                  {unit.contacts.map((c, i) => (
                    <ContactTag
                      key={i}
                      $type={c.type}
                      href={
                        c.type === "WhatsApp"
                          ? getWhatsAppUrl(c.number)
                          : `tel:${c.number.replace(/\D/g, "")}`
                      }
                      target={c.type === "WhatsApp" ? "_blank" : "_self"}
                      rel={c.type === "WhatsApp" ? "noopener noreferrer" : ""}
                      as="a"
                    >
                      {c.type === "WhatsApp" ? <FaWhatsapp /> : <FaPhone />}
                      {c.number}
                    </ContactTag>
                  ))}
                </ContactWrapper>
              )}
            </UnitCard>
          ))}
        </GridNetwork>
      </section>
    </PageWrapper>
  );
}
