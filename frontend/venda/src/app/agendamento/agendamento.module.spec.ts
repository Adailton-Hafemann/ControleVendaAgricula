import { AgendamentoModule } from './agendamento.module';

describe('AgendamentoModule', () => {
  let agendamentoModule: AgendamentoModule;

  beforeEach(() => {
    agendamentoModule = new AgendamentoModule();
  });

  it('should create an instance', () => {
    expect(agendamentoModule).toBeTruthy();
  });
});
