Hologram::CodeExampleRenderer::Factory.define 'iframify_tablet' do
  example_template 'iframify_tablet_example_template'
  lexer { Rouge::Lexer.find('html') }
end