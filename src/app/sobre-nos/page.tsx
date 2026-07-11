import React from 'react';
import { institutionalInfo, hemorredeUnits } from './data';
import {
  PageWrapper,
  MissionSection,
  NetworkHeader,
  GridNetwork,
  UnitCard,
  ContactTag
} from './styles';

export default function SobreNosPage() {
  return (
    <PageWrapper>
      {/* Bloco Institucional Principal */}
      <MissionSection>
        <h1>{institutionalInfo.title}</h1>
        <p>{institutionalInfo.mission}</p>
      </MissionSection>

      {/* Bloco de Localização / Infraestrutura */}
      <section>
        <NetworkHeader>
          <h2>Nossa Hemorrede</h2>
          <p>
            Encontre a unidade de coleta de sangue mais próxima de você. 
            O Governo do Maranhão disponibiliza núcleos em regiões estratégicas.
          </p>
        </NetworkHeader>

        <GridNetwork>
          {hemorredeUnits.map((unit) => (
            <UnitCard key={unit.id} $isMain={unit.isMainNode}>
              <h3>{unit.city}</h3>
              
              <address>
                <div className="meta-info">
                  <strong>📍 Endereço:</strong><br />
                  {unit.address}
                </div>
                
                <div className="meta-info" style={{ marginTop: '16px' }}>
                  <strong>🕒 Horário de Funcionamento:</strong>
                  <ul>
                    {unit.operatingHours.map((hour, index) => (
                      <li key={index}>{hour}</li>
                    ))}
                  </ul>
                </div>
              </address>

              {/* Renderização condicional garantida pela tipagem (contacts é opcional) */}
              {unit.contacts && unit.contacts.length > 0 && (
                <div>
                  {unit.contacts.map((contact, index) => (
                    <ContactTag key={index}>
                      {contact.type}: {contact.number}
                    </ContactTag>
                  ))}
                </div>
              )}
            </UnitCard>
          ))}
        </GridNetwork>
      </section>
    </PageWrapper>
  );
}